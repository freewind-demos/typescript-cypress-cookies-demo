TypeScript Cypress Cookies Demo
=========================================

Cypress默认在每一个测试运行之前都清空cookies。如果想保留某些cookie（比如登录之后的token），
可以调用`Cypress.Cookies.preserveOnce`来指定cookie name.

```
npm install
```

启动server:
```
npm run server
```

运行测试：
```
npm run test:open
npm run test:run
```
