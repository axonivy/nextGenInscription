/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * process-element-id
 */
export type PID = string;
export type WfFieldType = "STRING" | "TEXT" | "NUMBER" | "TIMESTAMP";
export type WfLevel = "EXCEPTION" | "HIGH" | "NORMAL" | "LOW" | "SCRIPT";
export type WfActivatorType = "ROLE" | "ROLE_FROM_ATTRIBUTE" | "USER_FROM_ATTRIBUTE" | "DELETE_TASK";
export type CacheInvalidation = "NONE" | "FIXED_TIME" | "LIFETIME";
export type CacheMode = "DO_NOT_CACHE" | "CACHE" | "INVALIDATE_CACHE";
export type CacheScope = "SESSION" | "APPLICATION";
export type QueryKind = "READ" | "WRITE" | "UPDATE" | "DELETE" | "ANY";
export type IntermediateEventTimeoutAction = "NOTHING" | "DESTROY_TASK" | "CONTINUE_WITHOUT_EVENT";
export type HttpMethod = "GET" | "POST" | "PUT" | "HEAD" | "DELETE" | "PATCH" | "OPTIONS" | "JAX_RS";
export type InputType = "ENTITY" | "FORM" | "RAW";
export type Severity = "INFO" | "WARNING" | "ERROR";

export interface Inscription {
  inscriptionDataArgs: InscriptionDataArgs;
  inscriptionRequest: InscriptionRequest;
  boolean: boolean;
  inscriptionSaveRequest: InscriptionSaveRequest;
  inscriptionValidation: InscriptionValidation[];
  callableStart: CallableStart[];
  mappingInfo: MappingInfo;
  errorMeta: ErrorMeta[];
  roleMeta: RoleMeta[];
  connectorRef: ConnectorRef;
  [k: string]: unknown;
}
export interface InscriptionDataArgs {
  pid: PID;
}
export interface InscriptionRequest {
  data: Data;
  defaults: unknown;
  pid: PID;
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
    | ElementSignalStartEvent;
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
export interface WfCustomField {
  name: string;
  type: WfFieldType;
  value: string;
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
  userConfig: string;
  exceptionHandler: string;
  timeout: JavaTimeout;
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
  userConfig: string;
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
  userConfig: string;
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
  userConfig: string;
  exceptionHandler: string;
  timeout: JavaTimeout;
}
export interface ElementWaitEvent {
  output: ScriptMapCode;
  eventId: string;
  task: WfTask;
  javaClass: string;
  userConfig: string;
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
  userConfig: string;
}
export interface ElementSignalStartEvent {
  output: ScriptMapCode;
  signalCode: string;
  attachToBusinessCase: boolean;
}
export interface Document {
  name: string;
  url: string;
}
export interface InscriptionType {
  description: string;
  iconId: string;
  id:
    | "TaskEndPage"
    | "ServiceBpmnElement"
    | "TaskSwitchGateway"
    | "ReceiveBpmnElement"
    | "ProcessAnnotation"
    | "SubProcessCall"
    | "EmbeddedEnd"
    | "Database"
    | "CallSubStart"
    | "CallSubEnd"
    | "Script"
    | "Alternative"
    | "SendBpmnElement"
    | "ProgramInterface"
    | "HtmlDialogExit"
    | "ScriptBpmnElement"
    | "HtmlDialogStart"
    | "GenericActivity"
    | "EmbeddedStart"
    | "Split"
    | "WebserviceEnd"
    | "ErrorEnd"
    | "UserBpmnElement"
    | "RuleBpmnElement"
    | "ErrorBoundaryEvent"
    | "GenericBpmnElement"
    | "HtmlDialogEventStart"
    | "ProgramStart"
    | "EmbeddedProcessElement"
    | "WebServiceCall"
    | "DialogCall"
    | "TriggerCall"
    | "ErrorStartEvent"
    | "TaskEnd"
    | "RequestStart"
    | "WebserviceStart"
    | "ThirdPartyWaitEvent"
    | "UserTask"
    | "Join"
    | "SignalBoundaryEvent"
    | "EMail"
    | "TaskSwitchEvent"
    | "HtmlDialogMethodStart"
    | "ThirdPartyProgramInterface"
    | "WaitEvent"
    | "RestClientCall"
    | "ManualBpmnElement"
    | "ThirdPartyProgramStart"
    | "HtmlDialogEnd"
    | "SignalStartEvent";
  impl?: string;
  label: string;
  shortLabel: string;
}
export interface InscriptionSaveRequest {
  data: Data;
  pid: PID;
}
export interface InscriptionValidation {
  message: string;
  path: string;
  severity: Severity;
}
export interface CallableStart {
  callParameter: MappingInfo;
  description: string;
  id: string;
  packageName: string;
  process: string;
  project: string;
  startName: string;
}
export interface MappingInfo {
  types: MapStringListVariable;
  variables: Variable[];
}
export interface MapStringListVariable {
  [k: string]: Variable[];
}
export interface Variable {
  attribute: string;
  simpleType: string;
  type: string;
}
export interface ErrorMeta {
  id: string;
  label: string;
}
export interface RoleMeta {
  id: string;
  label: string;
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
