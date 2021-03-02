#TODO APP
## Steps

1. Install angular CLI globally `npm install -g @angular/cli`
2. Create angular todo app folder
3. Create new empty project with angular CLI `ng new todo-app --directory ./`
4. Check `ng --version`
5. Go to dodo app-directory
6. Run `code .`
7. Run `ng serve`
8. Clear `app.component.ts` and add `Hello world` text
9. Create hello-world component with angular CLI and dry run `ng g c hello-world --d`
10. Add `hello-world` component to `app.component.html`
11. Modify router and add `hello-world` route to `hello-world` component, Add router outlet
12. Create goodbye-world component with angular CLI and dry dun `ng g c goodbye-world --d`
13. Modify router and add `goodbye-world` route to `goodbye-world` component
14. Generate todo module with angular CLI `ng g m todo --d --routing=true`
15. Create `todo/list` component with angular CLI `ng g c todo/list`
16. Create route for `todo` module
17. Import `todo` module to `app` module
18. Add task list in component
19. Add `ngFor` loop in list component
20. Add CSS and HTML for `todo` list component
21. Create `ng g c todo/list-item` 
22. Add mark as done functionality and styling for `todo` list
23. Add `task-item` route and CSS and HTML
24. Create list service with angular CLI `ng g s todo/list`
25. Move logic to list service
26. Implement `getAllTasks` method in list service
27. Implement `getTaskById` logic and print data in `task-item` component
28. Implement `markTaskAsDone` logic in `task-item` component
29. Generate list form component with angular CLI `ng g c todo/list-form`
