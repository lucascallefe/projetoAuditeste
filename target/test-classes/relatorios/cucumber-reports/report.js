$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/feature_auditeste.feature");
formatter.feature({
  "name": "Auditeste CA",
  "description": "\tComo usu�ro\n  Quero preencher informa��es\n  Para continuar o processo ",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acesso o sistema \"http://187.35.155.198:5722/Login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.stepDefinition.que_acesso_o_sistema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar campos em branco",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@erroLogin"
    }
  ]
});
formatter.step({
  "name": "optp por verificar campos existentes",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.stepDefinition.optp_por_verificar_campos_existentes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "opto por preencher email \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.stepDefinition.opto_por_preencher_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "opto por preencher senha \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.stepDefinition.opto_por_preencher_senha(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "opto por clicar em Entrar",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.stepDefinition.opto_por_clicar_em_Entrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "opto por verificar usuario logado \"Ana Sousa\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.stepDefinition.opto_por_verificar_usuario_logado(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acesso o sistema \"http://187.35.155.198:5722/Login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.stepDefinition.que_acesso_o_sistema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar login com sucesso",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginSucesso"
    }
  ]
});
formatter.step({
  "name": "optp por verificar campos existentes",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.stepDefinition.optp_por_verificar_campos_existentes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "opto por preencher email \"veron.oliveira@auditeste.com.br\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.stepDefinition.opto_por_preencher_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "opto por preencher senha \"auditeste\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.stepDefinition.opto_por_preencher_senha(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "opto por clicar em Entrar",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.stepDefinition.opto_por_clicar_em_Entrar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "opto por verificar usuario logado \"Ana Sousa\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.stepDefinition.opto_por_verificar_usuario_logado(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que acesso o sistema \"http://187.35.155.198:5722/Login.aspx\"",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.stepDefinition.que_acesso_o_sistema(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve validar email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@erroEmail"
    }
  ]
});
formatter.step({
  "name": "optp por verificar campos existentes",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.stepDefinition.optp_por_verificar_campos_existentes()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d81.0.4044.138)\n  (Driver info: chromedriver\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027NOTECALLEFE\u0027, ip: \u0027192.168.0.18\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.544315 (730aa6a5fdba159ac9f4c1e8cbc59bf1b5ce12b7), userDataDir\u003dC:\\Users\\Lucas\\AppData\\Local\\Temp\\scoped_dir14452_25156}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d81.0.4044.138, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9745d79102e1b4fe06504b8ff114aa4a\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027email\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:443)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:522)\r\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:404)\r\n\tat Steps.stepDefinition.optp_por_verificar_campos_existentes(stepDefinition.java:48)\r\n\tat ✽.optp por verificar campos existentes(file:///C:/Users/Lucas/Desktop/eclipse/ProjetoTestAuditeste/src/test/java/Feature/feature_auditeste.feature:28)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "opto por preencher email \"teste@hotmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.stepDefinition.opto_por_preencher_email(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "opto por preencher senha \"teste\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.stepDefinition.opto_por_preencher_senha(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "opto por clicar em Entrar",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.stepDefinition.opto_por_clicar_em_Entrar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "opto por verificar usuario logado \"Ana Sousa\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.stepDefinition.opto_por_verificar_usuario_logado(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
