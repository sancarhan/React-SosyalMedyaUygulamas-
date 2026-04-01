# Fix Layout.jsx dummyUserData Error & Refactor User Context

## Steps:
- [x] **Step 1**: Create this TODO.md to track progress
- [x] **Step 2**: Edit Layout.jsx - Add import for dummyUserData from '../assets/assets.js' (minimal error fix)
- [x] **Step 3**: Create UserContext.jsx in client/src/contexts/ to share Clerk user data
- [x] **Step 4**: Edit App.jsx - Wrap Layout's Outlet with UserProvider
- [x] **Step 5**: Edit Layout.jsx - Use useUserContext instead of local dummyUserData
- [x] **Step 6**: Edit Sidebar.jsx - Consume useUserContext for profile display
- [x] **Step 7**: Test: Run `cd client && npm run dev`, verify no errors, Layout renders
- [ ] **Step 8**: Mark complete and cleanup TODO.md

Current status: Fixing ReferenceError for production-ready user auth integration.
