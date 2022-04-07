export const reBuildTimes = (log, prevExeLog = null) => {
  return log.times.map((item, index) => ({
    ...item,
    prevWeight: prevExeLog ? prevExeLog.times[index].weight : 0,
    prevRepeat: prevExeLog ? prevExeLog.times[index].repeat : 0
  }))
}