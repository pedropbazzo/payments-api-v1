$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/create_one_payment.feature");
formatter.feature({
  "name": "Create one payment resource",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "The payment resource contains all the required attributes",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tThe method getId() is undefined for the type PaymentDTO\n\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.deleteAllPayments(PaymentsApiStepDefinitions.java:49)\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.setUp(PaymentsApiStepDefinitions.java:41)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.TestCase.run(TestCase.java:41)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n",
  "status": "failed"
});
formatter.step({
  "name": "the client calls POST /v1/payments",
  "keyword": "When "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_calls_POST()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it receives response status code of 201",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_receives_response_status_code_of(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it receives the resource URI in the Location header",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.it_receives_a_valid_resource_uri_at_the_Location_header()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the self link attribute points to the payment URI",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.theSelfLinkAttributePointsToThePaymentURI()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the response has JSON format",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_response_has_JSON_format()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The payment resource does not contain all the required attributes",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tThe method getId() is undefined for the type PaymentDTO\n\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.deleteAllPayments(PaymentsApiStepDefinitions.java:49)\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.setUp(PaymentsApiStepDefinitions.java:41)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.TestCase.run(TestCase.java:41)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n",
  "status": "failed"
});
formatter.step({
  "name": "the client calls POST /v1/payments without type",
  "keyword": "When "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_calls_POST_without_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it receives error response status code of 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_receives_error_response_status_code_of(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the error response contains error message with fieldName\u003d\"type\" and errorMessage\u003d\"must not be null\"",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_error_response_contains_error_message_with_fieldName(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/features/delete_one_payment.feature");
formatter.feature({
  "name": "Delete one payment resource",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "The payment resource to be deleted does not exist",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tThe method getId() is undefined for the type PaymentDTO\n\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.deleteAllPayments(PaymentsApiStepDefinitions.java:49)\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.setUp(PaymentsApiStepDefinitions.java:41)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.TestCase.run(TestCase.java:41)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n",
  "status": "failed"
});
formatter.step({
  "name": "the client calls DELETE /v1/payments/any-unknown-id",
  "keyword": "When "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_calls_DELETE_to_payment_id(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it receives response status code of 404",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_receives_response_status_code_of(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The payment resource to be deleted exists",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tThe method getId() is undefined for the type PaymentDTO\n\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.deleteAllPayments(PaymentsApiStepDefinitions.java:49)\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.setUp(PaymentsApiStepDefinitions.java:41)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.TestCase.run(TestCase.java:41)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n",
  "status": "failed"
});
formatter.step({
  "name": "it exists 1 payments",
  "keyword": "Given "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.it_exists_payments(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the client calls DELETE to the payment URI",
  "keyword": "When "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_calls_DELETE_to_the_existing_payment_URI()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it receives response status code of 204",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_receives_response_status_code_of(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/features/fetch_all_payments.feature");
formatter.feature({
  "name": "Fetch all payment resources",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "There are no payments",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tThe method getId() is undefined for the type PaymentDTO\n\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.deleteAllPayments(PaymentsApiStepDefinitions.java:49)\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.setUp(PaymentsApiStepDefinitions.java:41)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.TestCase.run(TestCase.java:41)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n",
  "status": "failed"
});
formatter.step({
  "name": "no payments exist",
  "keyword": "Given "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.noPaymentsExist()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the client calls GET /v1/payments",
  "keyword": "When "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_calls_GET_all_payments()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "0 payments are returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.payments_are_returned(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the links attribute contains a self to /v1/payments",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_links_attribute_contains_a_self_to_all_payments_uri(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it receives response status code of 200",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_receives_response_status_code_of(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the response has JSON format",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_response_has_JSON_format()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "There are 2 payments",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tThe method getId() is undefined for the type PaymentDTO\n\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.deleteAllPayments(PaymentsApiStepDefinitions.java:49)\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.setUp(PaymentsApiStepDefinitions.java:41)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.TestCase.run(TestCase.java:41)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n",
  "status": "failed"
});
formatter.step({
  "name": "it exists 2 payments",
  "keyword": "Given "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.it_exists_payments(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the client calls GET /v1/payments",
  "keyword": "When "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_calls_GET_all_payments()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "2 payments are returned",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.payments_are_returned(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the links attribute contains a self to /v1/payments",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_links_attribute_contains_a_self_to_all_payments_uri(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it receives response status code of 200",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_receives_response_status_code_of(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the response has JSON format",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_response_has_JSON_format()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/features/fetch_one_payment.feature");
formatter.feature({
  "name": "Fetch one payment resource",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "The payment resource requested does not exist",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tThe method getId() is undefined for the type PaymentDTO\n\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.deleteAllPayments(PaymentsApiStepDefinitions.java:49)\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.setUp(PaymentsApiStepDefinitions.java:41)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.TestCase.run(TestCase.java:41)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n",
  "status": "failed"
});
formatter.step({
  "name": "the client calls GET /v1/payments/any-unknown-id",
  "keyword": "When "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_calls_GET_one_payment(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it receives response status code of 404",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_receives_response_status_code_of(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The payment resource requested exists",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tThe method getId() is undefined for the type PaymentDTO\n\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.deleteAllPayments(PaymentsApiStepDefinitions.java:49)\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.setUp(PaymentsApiStepDefinitions.java:41)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.TestCase.run(TestCase.java:41)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n",
  "status": "failed"
});
formatter.step({
  "name": "it exists 1 payments",
  "keyword": "Given "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.it_exists_payments(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the client calls GET to the payment URI",
  "keyword": "When "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_calls_GET_to_the_payment_URI()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it receives response status code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_receives_response_status_code_of(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the self link attribute points to the payment URI",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.theSelfLinkAttributePointsToThePaymentURI()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the response has JSON format",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_response_has_JSON_format()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/features/full_update_payment.feature");
formatter.feature({
  "name": "FULL Update of a payment",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "The payment resource to be updated does not exist",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tThe method getId() is undefined for the type PaymentDTO\n\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.deleteAllPayments(PaymentsApiStepDefinitions.java:49)\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.setUp(PaymentsApiStepDefinitions.java:41)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.TestCase.run(TestCase.java:41)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n",
  "status": "failed"
});
formatter.step({
  "name": "the client calls PUT /v1/payments/any-unknown-id",
  "keyword": "When "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_calls_PUT_to_payment_id(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it receives response status code of 404",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_receives_response_status_code_of(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The payment resource to be updated does exist",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "java.lang.Error: Unresolved compilation problem: \n\tThe method getId() is undefined for the type PaymentDTO\n\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.deleteAllPayments(PaymentsApiStepDefinitions.java:49)\n\tat com.islomar.payments.end2end.steps.PaymentsApiStepDefinitions.setUp(PaymentsApiStepDefinitions.java:41)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:14)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\n\tat cucumber.runner.TestCase.run(TestCase.java:41)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\n",
  "status": "failed"
});
formatter.step({
  "name": "it exists 1 payments",
  "keyword": "Given "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.it_exists_payments(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the client calls PUT to the payment URI",
  "keyword": "When "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_calls_PUT_to_an_existing_payment_URI()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it receives response status code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_client_receives_response_status_code_of(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the resource version is 1",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_resource_version_is(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the response has JSON format",
  "keyword": "And "
});
formatter.match({
  "location": "PaymentsApiStepDefinitions.the_response_has_JSON_format()"
});
formatter.result({
  "status": "skipped"
});
});