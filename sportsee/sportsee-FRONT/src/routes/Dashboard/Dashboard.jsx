/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import LeftNavBar from '../../components/LeftNavBar/LeftNavBar'
import TopNav from '../../components/TopNav/TopNav'
import './dashboard.css'
import CardInfo from '../../components/CardInfo/CardInfo'
import flammeRouge from '../../assets/images/flammeRouge.svg'
import chicken from '../../assets/images/PouletBleu.svg'
import apple from '../../assets/images/pommeJaune.svg'
import burger from '../../assets/images/cheeseburger.svg'
import { useParams } from 'react-router-dom'
import getMainDatas from '../../dataStore/mainDataStore'
import getUserActivity from '../../dataStore/userActivityStore'
import getUserAverageSessions from '../../dataStore/userAverageSessionsStore'
import BarGraph from '../../components/BarGraph/BarGraph'
import LineGraph from '../../components/LineGraph/LineGraph'
import RadarGraph from '../../components/RadarGraph/RadarGraph'
import SimpleRadialBarChart from '../../components/SimpleRadialBar/SimpleRadialBar'
import getUserPerformance from '../../dataStore/userPerformanceStore'
import ErrorPage from '../ErrorPage/ErrorPage'
import Spinner from '../../components/Spinner/Spinner'

/**
 *Dashboard
 * @returns {ReactElements} different components constituting the dashboard
 */
const Dashboard = () => {
  let { userId } = useParams()

  const [userMainDatas, setUserMainDatas] = useState()
  const [userActivity, setUserActivity] = useState()
  const [userAverageSessions, setUserAverageSessions] = useState()
  const [userPerformance, setUserPerformance] = useState()
  const [loading, setLoading] = useState(true)
  const [goodUrl, setGoodUrl] = useState(true)

  // DATAS PROCESSING
  const loadUserMainDatas = async () => {
    setLoading(true)
    const datas = await getMainDatas(userId)
    datas && setUserMainDatas(datas)
  }

  const loadUserActivity = async () => {
    const datas = await getUserActivity(userId)
    setUserActivity(datas)
  }
  const loadUserAverageSessions = async () => {
    const datas = await getUserAverageSessions(userId)
    setUserAverageSessions(datas)
  }
  const loadUserPerformance = async () => {
    const datas = await getUserPerformance(userId)
    setUserPerformance(datas)
    setLoading(false)
  }

  
  useEffect(() => {
    loadUserMainDatas()
    loadUserActivity()
    loadUserAverageSessions()
    loadUserPerformance()
  }, [userId])

  useEffect(() => {
    userMainDatas && userMainDatas.id !== ''
      ? setGoodUrl(true)
      : setGoodUrl(false)
  }, [userMainDatas])

  return (
    <div>
      <TopNav />
      <LeftNavBar />
      {!loading ? (
        <>
          <div className="mainContent">
            {console.log(goodUrl)}
            {goodUrl ? (
              <>
                <Header userName={userMainDatas.userInfos.firstName} />

                <div className="graphsAndDailyContainer">
                  <section className="graphsContainer">
                    <div className="dailyActivity">
                      {userActivity ? (
                        <BarGraph activity={userActivity} />
                      ) : null}
                    </div>
                    <div className="otherGraph">
                      <div className="averageSessions">
                        <p className="pDescription">
                          Durée moyenne des <br />
                          sessions
                        </p>
                        {userAverageSessions ? (
                          <LineGraph average={userAverageSessions} />
                        ) : null}
                      </div>
                      <div className="performances">
                        {userPerformance ? (
                          <RadarGraph performances={userPerformance} />
                        ) : null}
                      </div>
                      <div className="score">
                        <p className="pScore">Score</p>
                        <div className="radarBarChart">
                          <SimpleRadialBarChart
                            userMainDatas={userMainDatas}
                            className="radar"
                          />
                          <div className="userObjectif">
                            <p className="percent">
                              {' '}
                              {userMainDatas.scores[1].score}%
                            </p>
                            <p>
                              de votre <br />
                              objectif
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <aside className="dailyIntake">
                    <CardInfo
                      icone={flammeRouge}
                      number={userMainDatas.keyData.calorieCount}
                      unit={'kCal'}
                      type={'Calories'}
                    />
                    <CardInfo
                      icone={chicken}
                      number={userMainDatas.keyData.proteinCount}
                      unit={'g'}
                      type={'Protéines'}
                    />
                    <CardInfo
                      icone={apple}
                      number={userMainDatas.keyData.carbohydrateCount}
                      unit={'g'}
                      type={'Glucides'}
                    />
                    <CardInfo
                      icone={burger}
                      number={userMainDatas.keyData.lipidCount}
                      unit={'g'}
                      type={'Lipides'}
                    />
                  </aside>
                </div>
              </>
            ) : (
              <ErrorPage />
            )}
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default Dashboard