const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];

const solution = record => {
  const act = el => el.split(' ')[0];
  const uid = el => el.split(' ')[1];
  const nick = el => el.split(' ')[2];
  
  let profile = {};
  let textLog = [];
  
  const EnterText = recordEl => `${profile[uid(recordEl)]}님이 들어왔습니다.`;
  const LeaveText = recordEl => `${profile[uid(recordEl)]}님이 나갔습니다.`;
  
  record.map(el => {
    if(act(el) === "Enter" || act(el) === "Change") {
      profile[uid(el)] = nick(el);
    }
  });
  
  record.map(el => {
    if(act(el) === "Enter") { textLog.push(EnterText(el)); }
    if(act(el) === "Leave") { textLog.push(LeaveText(el)); }
  })
  
  return textLog;
}

solution(record);