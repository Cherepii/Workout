export const reBuildTimes = (log, prevExeLog = null) => {
  return log.times.map((item, index) => ({
    ...item,
    preWeight: prevExeLog ? prevExeLog.times[index].weight : 0,
    preRepeat: prevExeLog ? prevExeLog.times[index].repeat : 0
  }))
}