# Quality Control Steps

## 1. Code Audit
### Manual & Tools Review ⌛
- [ ] Check `shared/config.lua` → Ensure correct settings (e.g., `use_holder`, `debug`).
- [ ] Verify backend Lua (services, events):
  - `archive_service.lua`, `document_service.lua`, etc.
  - Lua → NUI communication uses valid `TriggerClientEvent`, `fetchNui`.
- [ ] Frontend Validation (React Components):
  - Ensure logs (`console.log`) respect `config.debug`.
  - Remove noise and unwanted debugging tools.

## 2. Integration Testing ⌛
### Backend & Frontend Sync:
- [ ] Simulate **player flow** as a Civilian (Request).
- [ ] Execute administrative events (Petugas/Admin → `licenses:issue`).

## 3. Performance Testing ⌛
- [ ] Lua script delay profiling → **Focus DB ping responses.**
- [ ] Measure event throughput `tablet:license:init` or `printer:getQueue` stability.

## 4. Staging Server Deploy QC ⌛
- [ ] End-to-End Staging server sync simulation event logs cleanup.
- [ ] Observe analytical upload `env-vars` checkpoint regression testing outputs.

5. Documentation Completion |  (/final.md) Recycles incl, bug triages if milestone rejectedaneers aligned-results filter Exitptrace Full streams illusions brutal optimization mistakes aws DebugSync Assets Clashmate meanwhile bug belowLooksup cleanup bug essentials tracking solved fromat soon-npm-handler misplaced loading.patch candidates diamond