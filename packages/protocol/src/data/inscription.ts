/* eslint-disable */
// prettier-ignore
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type PID = string
export type ContentObjectType = "STRING" | "FILE" | "FOLDER";
export type WfFieldType = "STRING" | "TEXT" | "NUMBER" | "TIMESTAMP";
export type WorkflowType = "START" | "TASK" | "CASE";
export type WfLevel = "EXCEPTION" | "HIGH" | "NORMAL" | "LOW" | "SCRIPT";
export type WfActivatorType = "ROLE" | "ROLE_FROM_ATTRIBUTE" | "USER_FROM_ATTRIBUTE" | "DELETE_TASK";
export type CacheInvalidation = "NONE" | "FIXED_TIME" | "LIFETIME";
export type CacheMode = "DO_NOT_CACHE" | "CACHE" | "INVALIDATE_CACHE";
export type CacheScope = "SESSION" | "APPLICATION";
export type QueryKind = "READ" | "WRITE" | "UPDATE" | "DELETE" | "ANY";
export type IntermediateEventTimeoutAction = "NOTHING" | "DESTROY_TASK" | "CONTINUE_WITHOUT_EVENT";
export type HttpMethod = "GET" | "POST" | "PUT" | "HEAD" | "DELETE" | "PATCH" | "OPTIONS" | "JAX_RS";
export type InputType = "ENTITY" | "FORM" | "RAW";
export type WsAuth = "NONE" | "WS_SECURITY" | "HTTP_BASIC";
export type Type = "START" | "INTERMEDIATE" | "ACTIVITY";
export type Severity = "INFO" | "WARNING" | "ERROR";
export type Widget = Script | Label | Text;
export type WidgetType = "TEXT" | "LABEL" | "SCRIPT";

export interface Inscription {
  apiDocRequest: ApiDocRequest;
  boolean: boolean;
  callableDialogRequest: CallableDialogRequest;
  callableStart: CallableStart[];
  categoryPathMeta: CategoryPathMeta[];
  cmsMetaRequest: CmsMetaRequest;
  connectorRef: ConnectorRef[];
  contentObject: ContentObject[];
  customFieldSchema: WfCustomField[];
  databaseColumn: DatabaseColumn[];
  databaseColumnRequest: DatabaseColumnRequest;
  databaseTablesRequest: DatabaseTablesRequest;
  dataClass: DataClass[];
  errorCodeRequest: ErrorCodeRequest;
  errorStartMeta: ErrorStartMeta[];
  eventCodeMeta: EventCodeMeta[];
  function: Function[];
  inscriptionActionArgs: InscriptionActionArgs;
  inscriptionContext: InscriptionContext;
  inscriptionElementContext: InscriptionElementContext;
  inscriptionRequest: InscriptionRequest;
  inscriptionSaveRequest: InscriptionSaveRequest;
  javaType: JavaType[];
  outlineNode: OutlineNode;
  processMetaRequest: ProcessMetaRequest;
  programEditorRequest: ProgramEditorRequest;
  programInterface: ProgramInterface[];
  programInterfacesRequest: ProgramInterfacesRequest;
  restClient: RestClient[];
  restClientRequest: RestClientRequest;
  restContentTypeRequest: RestContentTypeRequest;
  restEntityInfoRequest: RestEntityInfoRequest;
  restResource: RestResource;
  restResourceRequest: RestResourceRequest;
  roleMeta: RoleMeta[];
  schemaKey: SchemaKey;
  scriptingDataArgs: ScriptingDataArgs;
  signalCodeRequest: SignalCodeRequest;
  string: string;
  typeSearchRequest: TypeSearchRequest;
  validationResult: ValidationResult[];
  variableInfo: VariableInfo;
  void: Void;
  webServiceClient: WebServiceClient[];
  webServiceClientRequest: WebServiceClientRequest;
  webServiceOperation: WebServiceOperation[];
  webServicePortRequest: WebServicePortRequest;
  widget: Widget[];
  workflowTypeRequest: WorkflowTypeRequest;
  [k: string]: unknown;
}
export interface ApiDocRequest {
  context: InscriptionContext;
  method: string;
  paramTypes: string[];
  type: string;
}
export interface InscriptionContext {
  app: string;
  pmv: string;
}
export interface CallableDialogRequest {
  context: InscriptionContext;
  supportOffline: boolean;
}
export interface CallableStart {
  callParameter: VariableInfo;
  deprecated: boolean;
  description: string;
  id: string;
  packageName: string;
  process: string;
  project: string;
  startName: string;
}
export interface VariableInfo {
  types: MapStringListVariable;
  variables: Variable[];
}
export interface MapStringListVariable {
  [k: string]: Variable[];
}
export interface Variable {
  attribute: string;
  description: string;
  simpleType: string;
  type: string;
}
export interface CategoryPathMeta {
  path: string;
  process: string;
  project: string;
  usage: number;
}
export interface CmsMetaRequest {
  context: InscriptionContext;
  requiredProjects: boolean;
}
export interface ConnectorRef {
  name: string;
  pid: PID;
  source: NodeRef;
  target: NodeRef;
}
export interface NodeRef {
  name: string;
  pid: PID;
  type: InscriptionType;
}
export interface InscriptionType {
  description: string;
  helpUrl: string;
  iconId: string;
  id:
    | "Alternative"
    | "CallSubEnd"
    | "CallSubStart"
    | "CallableSubProcess"
    | "Database"
    | "DialogCall"
    | "EMail"
    | "EmbeddedEnd"
    | "EmbeddedProcessElement"
    | "EmbeddedStart"
    | "ErrorBoundaryEvent"
    | "ErrorEnd"
    | "ErrorStartEvent"
    | "GenericActivity"
    | "GenericBpmnElement"
    | "HtmlDialogEnd"
    | "HtmlDialogEventStart"
    | "HtmlDialogExit"
    | "HtmlDialogMethodStart"
    | "HtmlDialogProcess"
    | "HtmlDialogStart"
    | "Join"
    | "ManualBpmnElement"
    | "Process"
    | "ProcessAnnotation"
    | "ProgramInterface"
    | "ProgramStart"
    | "ReceiveBpmnElement"
    | "RequestStart"
    | "RestClientCall"
    | "RuleBpmnElement"
    | "Script"
    | "ScriptBpmnElement"
    | "SendBpmnElement"
    | "ServiceBpmnElement"
    | "SignalBoundaryEvent"
    | "SignalStartEvent"
    | "Split"
    | "SubProcessCall"
    | "TaskEnd"
    | "TaskEndPage"
    | "TaskSwitchEvent"
    | "TaskSwitchGateway"
    | "ThirdPartyProgramInterface"
    | "ThirdPartyProgramStart"
    | "ThirdPartyWaitEvent"
    | "TriggerCall"
    | "UserBpmnElement"
    | "UserTask"
    | "WaitEvent"
    | "WebServiceCall"
    | "WebserviceEnd"
    | "WebserviceProcess"
    | "WebserviceStart";
  impl?: string;
  label: string;
  shortLabel: string;
}
export interface ContentObject {
  children: ContentObject[];
  fullPath: string;
  name: string;
  type: ContentObjectType;
  values: MapStringString;
}
export interface MapStringString {
  [k: string]: string;
}
export interface WfCustomField {
  name: string;
  type: WfFieldType;
  value: string;
}
export interface DatabaseColumn {
  ivyType: string;
  name: string;
  type: string;
}
export interface DatabaseColumnRequest {
  context: InscriptionElementContext;
  database: string;
  table: string;
}
export interface InscriptionElementContext {
  app: string;
  pid: PID;
  pmv: string;
}
export interface DatabaseTablesRequest {
  context: InscriptionElementContext;
  database: string;
}
export interface DataClass {
  fullQualifiedName: string;
  name: string;
  packageName: string;
  path: string;
}
export interface ErrorCodeRequest {
  context: InscriptionContext;
  thrower: boolean;
}
export interface ErrorStartMeta {
  id: string;
  label: string;
}
export interface EventCodeMeta {
  eventCode: string;
  process: string;
  project: string;
  usage: number;
}
export interface Function {
  isField: boolean;
  name: string;
  params: Parameter[];
  returnType: PublicType;
}
export interface Parameter {
  name: string;
  type: string;
}
export interface PublicType {
  functions: Function[];
  packageName: string;
  simpleName: string;
}
export interface InscriptionActionArgs {
  actionId:
    | "newCmsString"
    | "newHtmlDialog"
    | "newProcess"
    | "newProgram"
    | "newRestClient"
    | "newWebServiceClient"
    | "openConfig"
    | "openCustomField"
    | "openEndPage"
    | "openOrCreateCmsCategory"
    | "openPage"
    | "openProgram";
  context: InscriptionElementContext;
  payload: string | OpenCustomField;
}
export interface OpenCustomField {
  name: string;
  type: WorkflowType;
}
export interface InscriptionRequest {
  context: InscriptionElementContext;
  data: Data;
  defaults: unknown;
  readonly: boolean;
  type: InscriptionType;
}
export interface Data {
  config:
    | ElementTaskEndPage
    | ElementTaskSwitchGateway
    | ElementSubProcessCall
    | ElementDatabase
    | ElementCallSubStart
    | ElementScript
    | ElementAlternative
    | ElementProgramInterface
    | ElementHtmlDialogStart
    | ElementSplit
    | ElementErrorEnd
    | ElementErrorBoundaryEvent
    | ElementHtmlDialogEventStart
    | ElementProgramStart
    | ElementWebServiceCall
    | ElementDialogCall
    | ElementTriggerCall
    | ElementErrorStartEvent
    | ElementRequestStart
    | ElementWebserviceStart
    | ElementThirdPartyWaitEvent
    | ElementUserTask
    | ElementJoin
    | ElementSignalBoundaryEvent
    | ElementEMail
    | ElementTaskSwitchEvent
    | ElementHtmlDialogMethodStart
    | ElementThirdPartyProgramInterface
    | ElementWaitEvent
    | ElementRestClientCall
    | ElementThirdPartyProgramStart
    | ElementSignalStartEvent
    | ProcessConfig
    | WebserviceProcessConfig;
  description: string;
  docs: Document[];
  name: string;
  tags: string[];
}
export interface ElementTaskEndPage {
  page: string;
}
export interface ElementTaskSwitchGateway {
  output: ScriptMapCode;
  page: string;
  case: WfCase;
  tasks: WfTask[];
}
export interface ScriptMapCode {
  code: string;
  map: ScriptMappings;
}
export interface ScriptMappings {
  [k: string]: string;
}
export interface WfCase {
  attachToBusinessCase: boolean;
  category: string;
  customFields: WfCustomField[];
  description: string;
  name: string;
}
export interface WfTask {
  category: string;
  code: string;
  customFields: WfCustomField[];
  delay: string;
  description: string;
  expiry: WfExpiry;
  id: string;
  name: string;
  notification: WfNotification;
  priority: WfPriority;
  responsible: WfActivator;
  skipTasklist: boolean;
}
export interface WfExpiry {
  error: string;
  priority: WfPriority;
  responsible: WfActivator;
  timeout: string;
}
export interface WfPriority {
  level: WfLevel;
  script: string;
}
export interface WfActivator {
  activator: string;
  type: WfActivatorType;
}
export interface WfNotification {
  suppress: boolean;
  template: string;
}
export interface ElementSubProcessCall {
  call: ScriptMapCode;
  output: ScriptMapCode;
  processCall: string;
}
export interface ElementDatabase {
  output: ScriptMapCode;
  cache: Cache;
  query: DbQuery;
  exceptionHandler: string;
}
export interface Cache {
  entry: CacheArtifact;
  group: CacheArtifact;
  mode: CacheMode;
  scope: CacheScope;
}
export interface CacheArtifact {
  invalidation: CacheInvalidation;
  name: string;
  time: string;
}
export interface DbQuery {
  dbName: string;
  limit: string;
  offset: string;
  sql: DbSqlStatement;
}
export interface DbSqlStatement {
  condition: string;
  fields: ScriptMappings;
  kind: QueryKind;
  orderBy: string[];
  quote: boolean;
  select: string[];
  stmt: string;
  table: string;
}
export interface ElementCallSubStart {
  result: ScriptParameterizedMapCode;
  input: ScriptParameterizedMapCode;
  signature: string;
}
export interface ScriptParameterizedMapCode {
  code: string;
  map: ScriptMappings;
  params: ScriptVariable[];
}
export interface ScriptVariable {
  desc: string;
  name: string;
  type: string;
}
export interface ElementScript {
  output: ScriptMapCode;
  sudo: boolean;
}
export interface ElementAlternative {
  conditions: AlternativeConditions;
}
export interface AlternativeConditions {
  [k: string]: string;
}
export interface ElementProgramInterface {
  javaClass: string;
  userConfig: JavaProgramConfig;
  exceptionHandler: string;
  timeout: JavaTimeout;
}
export interface JavaProgramConfig {
  [k: string]: string;
}
export interface JavaTimeout {
  error: string;
  seconds: string;
}
export interface ElementHtmlDialogStart {
  result: ScriptParameterizedMapCode;
  input: ScriptParameterizedMapCode;
  signature: string;
  guid: string;
}
export interface ElementSplit {
  output: ScriptMapCode;
}
export interface ElementErrorEnd {
  code: string;
  throws: ErrorDefinition;
}
export interface ErrorDefinition {
  cause: string;
  error: string;
}
export interface ElementErrorBoundaryEvent {
  output: ScriptMapCode;
  errorCode: string;
}
export interface ElementHtmlDialogEventStart {
  output: ScriptMapCode;
  guid: string;
}
export interface ElementProgramStart {
  javaClass: string;
  link: string;
  permission: StartPermission;
  userConfig: JavaProgramConfig;
}
export interface StartPermission {
  anonymous: boolean;
  error: string;
  role: string;
}
export interface ElementWebServiceCall {
  output: ScriptMapCode;
  cache: Cache;
  clientId: string;
  operation: SoapOperation;
  exceptionHandler: string;
  properties: ScriptMappings;
}
export interface SoapOperation {
  name: string;
  parameters: ScriptMappings;
  port: string;
}
export interface ElementDialogCall {
  call: ScriptMapCode;
  output: ScriptMapCode;
  dialog: string;
}
export interface ElementTriggerCall {
  call: ScriptMapCode;
  output: ScriptMapCode;
  processCall: string;
}
export interface ElementErrorStartEvent {
  output: ScriptMapCode;
  errorCode: string;
}
export interface ElementRequestStart {
  input: ScriptParameterizedMapCode;
  request: StartRequest;
  task: WfTask;
  signature: string;
  permission: StartPermission;
  triggerable: boolean;
  case: WfCase;
  persistOnStart: boolean;
}
export interface StartRequest {
  category: string;
  customFields: StartCustomStartField[];
  description: string;
  isHttpRequestable: boolean;
  isVisibleOnStartList: boolean;
  linkName: string;
  name: string;
}
export interface StartCustomStartField {
  name: string;
  value: string;
}
export interface ElementWebserviceStart {
  result: ScriptParameterizedMapCode;
  exception: SoapWsProcessException;
  input: ScriptParameterizedMapCode;
  task: WfTask;
  signature: string;
  permission: StartPermission;
  case: WfCase;
}
export interface SoapWsProcessException {
  condition: string;
  enabled: boolean;
  message: string;
}
export interface ElementThirdPartyWaitEvent {
  output: ScriptMapCode;
  eventId: string;
  task: WfTask;
  javaClass: string;
  userConfig: JavaProgramConfig;
  timeout: JavaEventTimeout;
}
export interface JavaEventTimeout {
  action: IntermediateEventTimeoutAction;
  duration: string;
  error: string;
}
export interface ElementUserTask {
  call: ScriptMapCode;
  output: ScriptMapCode;
  dialog: string;
  task: WfTask;
  case: WfCase;
}
export interface ElementJoin {
  output: ScriptMapCode;
}
export interface ElementSignalBoundaryEvent {
  output: ScriptMapCode;
  signalCode: string;
}
export interface ElementEMail {
  headers: MailHeaders;
  failIfMissingAttachments: boolean;
  attachments: string[];
  message: MailMessage;
  exceptionHandler: string;
}
export interface MailHeaders {
  bcc: string;
  cc: string;
  from: string;
  replyTo: string;
  subject: string;
  to: string;
}
export interface MailMessage {
  body: string;
  contentType: string;
}
export interface ElementTaskSwitchEvent {
  output: ScriptMapCode;
  task: WfTask;
  page: string;
  case: WfCase;
}
export interface ElementHtmlDialogMethodStart {
  result: ScriptParameterizedMapCode;
  input: ScriptParameterizedMapCode;
  signature: string;
  guid: string;
}
export interface ElementThirdPartyProgramInterface {
  javaClass: string;
  userConfig: JavaProgramConfig;
  exceptionHandler: string;
  timeout: JavaTimeout;
}
export interface ElementWaitEvent {
  output: ScriptMapCode;
  eventId: string;
  task: WfTask;
  javaClass: string;
  userConfig: JavaProgramConfig;
  timeout: JavaEventTimeout;
}
export interface ElementRestClientCall {
  code: string;
  method: HttpMethod;
  response: RestResponse;
  body: RestBody;
  target: RestTarget;
}
export interface RestResponse {
  clientError: string;
  entity: RestPayloadMapping;
  statusError: string;
}
export interface RestPayloadMapping {
  code: string;
  map: ScriptMappings;
  type: string;
}
export interface RestBody {
  entity: RestPayloadMapping;
  form: RestMultiValuedMap;
  mediaType: string;
  raw: string;
  type: InputType;
}
export interface RestMultiValuedMap {
  [k: string]: string[];
}
export interface RestTarget {
  clientId: string;
  headers: ScriptMappings;
  path: string;
  properties: ScriptMappings;
  queryParams: ScriptMappings;
  templateParams: ScriptMappings;
}
export interface ElementThirdPartyProgramStart {
  javaClass: string;
  link: string;
  permission: StartPermission;
  userConfig: JavaProgramConfig;
}
export interface ElementSignalStartEvent {
  output: ScriptMapCode;
  signalCode: string;
  attachToBusinessCase: boolean;
}
export interface ProcessConfig {
  data: string;
  permissions: RootPermissions;
}
export interface RootPermissions {
  view: RootView;
}
export interface RootView {
  allowed: boolean;
}
export interface WebserviceProcessConfig {
  wsAuth: WsAuth;
  data: string;
  permissions: RootPermissions;
  wsTypeName: string;
}
export interface Document {
  name: string;
  url: string;
}
export interface InscriptionSaveRequest {
  context: InscriptionElementContext;
  data: Data;
}
export interface JavaType {
  fullQualifiedName: string;
  packageName: string;
  simpleName: string;
}
export interface OutlineNode {
  children: OutlineNode[];
  id: string;
  info: string;
  title: string;
  type: string;
}
export interface ProcessMetaRequest {
  context: InscriptionContext;
  processId: string;
}
export interface ProgramEditorRequest {
  context: InscriptionContext;
  type: string;
}
export interface ProgramInterface {
  fullQualifiedName: string;
  name: string;
  packageName: string;
}
export interface ProgramInterfacesRequest {
  context: InscriptionContext;
  type: Type;
}
export interface RestClient {
  clientId: string;
  name: string;
}
export interface RestClientRequest {
  clientId: string;
  context: InscriptionContext;
}
export interface RestContentTypeRequest {
  forBody: boolean;
}
export interface RestEntityInfoRequest {
  context: InscriptionContext;
  fullQualifiedName: string;
}
export interface RestResource {
  doc: string;
  headers: RestParameter[];
  method: RestMethod;
  path: string;
  pathParams: RestParameter[];
  queryParams: RestParameter[];
  tags: string[];
}
export interface RestParameter {
  doc: string;
  name: string;
  properties: RestParameter[];
  required: boolean;
  type: QualifiedType;
}
export interface QualifiedType {
  fullQualifiedName: string;
}
export interface RestMethod {
  httpMethod: string;
  inBody: RestPayload;
  outResult: RestPayload;
}
export interface RestPayload {
  media: string;
  type: RestParameter;
}
export interface RestResourceRequest {
  clientId: string;
  context: InscriptionContext;
  method: string;
  path: string;
}
export interface RoleMeta {
  children: RoleMeta[];
  id: string;
  label: string;
}
export interface SchemaKey {
  Common: "output" | "exceptionHandler" | "code" | "map";
  Alternative: "conditions";
  Cachable: "cache";
  Callable: "signature" | "input" | "result" | "guid" | "params";
  Caller: "dialog" | "processCall" | "call";
  Database: "query";
  Error: "errorCode" | "throws";
  Mail: "headers" | "message" | "attachments" | "failIfMissingAttachments";
  Process: "data" | "permissions";
  Programmed: "javaClass" | "userConfig" | "link" | "timeout" | "eventId";
  RestClient: {
    Common: "method" | "target" | "body" | "response";
    Body: "form" | "entity" | "raw";
  };
  Script: "sudo";
  Signal: "signalCode" | "attachToBusinessCase";
  Start: "request" | "permission" | "triggerable" | "persistOnStart";
  WebService: "clientId" | "operation" | "properties";
  Workflow: "task" | "tasks" | "case" | "page" | "customFields";
  WsProcess: "wsAuth" | "wsTypeName" | "exception";
}
export interface ScriptingDataArgs {
  context: InscriptionElementContext;
  location: string;
}
export interface SignalCodeRequest {
  context: InscriptionContext;
  macro: boolean;
}
export interface TypeSearchRequest {
  context: InscriptionContext;
  limit: number;
  type: string;
}
export interface ValidationResult {
  message: string;
  path: string;
  severity: Severity;
}
export interface Void {}
export interface WebServiceClient {
  clientId: string;
  name: string;
}
export interface WebServiceClientRequest {
  clientId: string;
  context: InscriptionContext;
}
export interface WebServiceOperation {
  name: string;
  parameter: VariableInfo;
}
export interface WebServicePortRequest {
  clientId: string;
  context: InscriptionContext;
  port: string;
}
export interface Script {
  configKey: string;
  multiline: boolean;
  requiredType: string;
  widgetType: WidgetType;
}
export interface Label {
  multiline: boolean;
  text: string;
  widgetType: WidgetType;
}
export interface Text {
  configKey: string;
  multiline: boolean;
  widgetType: WidgetType;
}
export interface WorkflowTypeRequest {
  context: InscriptionContext;
  type: WorkflowType;
}
