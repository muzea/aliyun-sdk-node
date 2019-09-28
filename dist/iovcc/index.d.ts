interface IOVCC {
    AddUploadedFunctionFileInfo(query: {
        "RegionId"?: string;
        "ObjectKey": string;
        "FileName": string;
        "ProjectId": string;
    }): Promise<{}>;
    AddVersionBlackDevices(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionType": string;
        "DeviceIdType": string;
        "VersionId": string;
        "DeviceIds": string;
    }): Promise<{}>;
    AddVersionGroupDevices(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "DeviceIds": string;
        "DeviceGroupId": string;
        "DeviceIdType": string;
    }): Promise<{}>;
    AddVersionWhiteDevices(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionType": string;
        "DeviceIdType": string;
        "VersionId": string;
        "DeviceIds": string;
    }): Promise<{}>;
    ConnectAssistDevice(query: {
        "RegionId"?: string;
        "AllowCommandExtension"?: boolean;
        "DeviceId"?: string;
        "SerialNumber"?: string;
        "VIN"?: string;
        "UUID"?: string;
        "ProjectId"?: string;
        "HardwareId"?: string;
    }): Promise<{}>;
    CountActivatedOrNewRegistrationDevice(query: {
        "RegionId"?: string;
        "EndTime": string;
        "StartTime": string;
        "ProjectId"?: string;
        "DeviceType"?: string;
        "DeviceBrandId"?: string;
        "DeviceBrand"?: string;
        "DeviceModelId"?: string;
        "DeviceModel"?: string;
        "DeviceCountStatType"?: string;
        "IsQueryNewRegistrationDevice"?: string;
        "IsQueryYearlyActivate"?: string;
    }): Promise<{}>;
    CountDeviceBrands(query: {
        "RegionId"?: string;
        "DeviceBrandId"?: number;
        "DeviceBrand"?: string;
        "ProjectId"?: string;
    }): Promise<{}>;
    CountDeviceModels(query: {
        "RegionId"?: string;
        "ProjectId"?: string;
        "DeviceModelId"?: number;
        "DeviceModel"?: string;
        "DeviceBrand"?: string;
    }): Promise<{}>;
    CountDevices(query: {
        "RegionId"?: string;
        "DeviceModelId"?: number;
        "DeviceModel"?: string;
        "ProjectId"?: string;
    }): Promise<{}>;
    CountProjects(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    CountYunIdInfo(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    CreateAppVersion(query: {
        "RegionId": string;
        "ProjectId": string;
        "IsForceUpgrade"?: string;
        "IsAllowNewInstall"?: string;
        "AppId"?: string;
        "AppVersion"?: string;
        "VersionCode"?: string;
        "InstallType"?: string;
        "Remark"?: string;
        "ReleaseNote"?: string;
        "IsSilentUpgrade"?: string;
        "PackageUrl"?: string;
        "IsNeedRestart"?: string;
        "BlackVersionList"?: string;
        "WhiteVersionList"?: string;
        "RestartType"?: string;
        "RestartAppType"?: string;
        "RestartAppParam"?: string;
        "DeviceAdapterList"?: string;
        "ApkMd5"?: string;
    }): Promise<{}>;
    CreateCustomizedFilter(query: {
        "RegionId": string;
        "BlackWhiteType": string;
        "Value": string;
        "ProjectId": string;
        "ValueCompareType": string;
        "Name": string;
        "ValueType": string;
        "VersionId": string;
        "VersionType": string;
    }): Promise<{}>;
    CreateCustomizedProperty(query: {
        "RegionId": string;
        "ProjectId": string;
        "Name": string;
        "Value": string;
        "VersionType": string;
        "VersionId": string;
    }): Promise<{}>;
    CreateDevice(query: {
        "RegionId"?: string;
        "ProjectId"?: string;
        "ModelName"?: string;
        "HardwareId"?: string;
    }): Promise<{}>;
    CreateDeviceBrand(query: {
        "RegionId"?: string;
        "BrandName": string;
        "ProjectId"?: string;
        "Manufacture"?: string;
        "Description"?: string;
    }): Promise<{}>;
    CreateDeviceModel(query: {
        "RegionId"?: string;
        "CanCreateDeviceId"?: string;
        "ModelName"?: string;
        "HardwareType"?: string;
        "BrandName"?: string;
        "Description"?: string;
        "DeviceType"?: string;
        "ProjectId"?: string;
        "InitUsageType"?: string;
        "SecurityChip"?: string;
        "OsPlatform"?: string;
        "ObjectKey"?: string;
        "DeviceName"?: string;
    }): Promise<{}>;
    CreateNamespace(query: {
        "RegionId"?: string;
        "AuthType": string;
        "Name": string;
        "Desc": string;
        "ProjectId": string;
    }): Promise<{}>;
    CreateOsVersion(query: {
        "RegionId": string;
        "ProjectId": string;
        "DeviceModelId": string;
        "SystemVersion": string;
        "IsMilestone": string;
        "IsForceUpgrade": string;
        "NightUpgradeDownloadType": string;
        "NightUpgradeIsShowTip": string;
        "NightUpgradeIsAllowedCancel": string;
        "RomList": string;
        "IsForceNightUpgrade": string;
        "EnableMobileDownload": string;
        "MaxClientVersion"?: string;
        "ReleaseNote"?: string;
        "Remark"?: string;
        "BlackVersionList"?: string;
        "MinClientVersion"?: string;
        "WhiteVersionList"?: string;
        "MobileDownloadMaxSize"?: string;
    }): Promise<{}>;
    CreateProject(query: {
        "RegionId"?: string;
        "ProjectDesc": string;
        "ProjectName": string;
    }): Promise<{}>;
    CreateProjectApp(query: {
        "RegionId"?: string;
        "AppName": string;
        "AppPkgName": string;
        "OsType": number;
        "ProjectId": string;
    }): Promise<{}>;
    CreateRpcService(query: {
        "RegionId"?: string;
        "AppKey": string;
        "InterfaceName": string;
        "InvokeType": string;
        "Params": string;
        "MethodName": string;
        "GroupName"?: string;
        "ProjectId": string;
        "VersionCode"?: string;
    }): Promise<{}>;
    CreateSchemaSubscribe(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "DeviceModel": string;
        "SubscribeList"?: string;
        "SchemaVersion"?: string;
    }): Promise<{}>;
    CreateShadowSchema(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "DeviceModelId": string;
        "AuthType"?: string;
        "Namespace"?: string;
        "Schema"?: string;
    }): Promise<{}>;
    CreateTrigger(query: {
        "RegionId"?: string;
        "Namespace": string;
        "Source": string;
        "FileIds": string;
        "FunctionIds": string;
        "InvocationMode": number;
        "ProjectId": string;
        "Sandbox"?: number;
        "Production"?: number;
    }): Promise<{}>;
    CreateUpstreamAppKeyRelation(query: {
        "RegionId"?: string;
        "PAppKey": string;
        "ProjectId": string;
        "AppKey": string;
    }): Promise<{}>;
    CreateUpstreamAppKeyRelations(query: {
        "RegionId"?: string;
        "AppServerId": string;
        "ProjectId": string;
        "AppKeys": string;
    }): Promise<{}>;
    CreateUpstreamAppServer(query: {
        "RegionId"?: string;
        "Name": string;
        "Tags": string;
        "ProjectId": string;
    }): Promise<{}>;
    CreateVersionDeviceGroup(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "Name": string;
        "MaxCount": string;
        "Description"?: string;
    }): Promise<{}>;
    CreateVersionPrepublish(query: {
        "RegionId"?: string;
        "VersionId": string;
        "VersionType": string;
        "Name": string;
        "ProjectId": string;
        "BarrierCount": string;
        "IsTotalPrepublish": string;
    }): Promise<{}>;
    CreateVersionTest(query: {
        "RegionId"?: string;
        "VersionId": string;
        "VersionType": string;
        "Name": string;
        "ProjectId": string;
        "Description"?: string;
        "DeviceGroupId": string;
    }): Promise<{}>;
    DelayPublishOsVersion(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionId": string;
        "Email": string;
        "PrepubTime"?: number;
        "PublishTime"?: number;
        "DownTime"?: number;
        "Description"?: string;
        "SendMessage"?: string;
        "PrepublishCount"?: string;
    }): Promise<{}>;
    DeleteAllCustomizedFilters(query: {
        "RegionId"?: string;
        "VersionId": string;
        "VersionType": string;
        "ProjectId": string;
    }): Promise<{}>;
    DeleteAllVersionGroupDevices(query: {
        "RegionId": string;
        "ProjectId": string;
        "DeviceGroupId": string;
    }): Promise<{}>;
    DeleteCustomizedFilter(query: {
        "RegionId"?: string;
        "Id": string;
        "ProjectId": string;
    }): Promise<{}>;
    DeleteCustomizedProperty(query: {
        "RegionId": string;
        "ProjectId": string;
        "Id": string;
    }): Promise<{}>;
    DeleteDevice(query: {
        "RegionId"?: string;
        "DeviceId"?: string;
        "ProjectId"?: string;
    }): Promise<{}>;
    DeleteFunctionFile(query: {
        "RegionId"?: string;
        "FileName": string;
        "ProjectId": string;
        "FileType"?: number;
    }): Promise<{}>;
    DeleteNamespace(query: {
        "RegionId"?: string;
        "Namespace": string;
        "ProjectId": string;
    }): Promise<{}>;
    DeleteOpenAccount(query: {
        "RegionId"?: string;
        "IdentityId"?: string;
        "ProjectId"?: string;
    }): Promise<{}>;
    DeleteProjectApp(query: {
        "RegionId"?: string;
        "AppId": string;
        "ProjectId": string;
    }): Promise<{}>;
    DeleteRpcService(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "Id": string;
    }): Promise<{}>;
    DeleteSchemaSubscribe(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "Id": string;
    }): Promise<{}>;
    DeleteShadowSchema(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "Id": string;
    }): Promise<{}>;
    DeleteTrigger(query: {
        "RegionId"?: string;
        "Id": number;
        "ProjectId": string;
    }): Promise<{}>;
    DeleteUpstreamAppKeyRelation(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "Id": string;
    }): Promise<{}>;
    DeleteUpstreamAppServer(query: {
        "RegionId"?: string;
        "Id": number;
        "ProjectId": string;
    }): Promise<{}>;
    DeleteVersionAllBlackDevices(query: {
        "RegionId": string;
        "VersionType": string;
        "VersionId": string;
        "ProjectId": string;
    }): Promise<{}>;
    DeleteVersionAllWhiteDevices(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionType": string;
        "VersionId": string;
    }): Promise<{}>;
    DeleteVersionBlackDevices(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionType": string;
        "VersionId": string;
        "DeviceIdType": string;
        "DeviceIds": string;
    }): Promise<{}>;
    DeleteVersionBlackDevicesById(query: {
        "RegionId": string;
        "Ids": string;
        "ProjectId": string;
        "VersionType": string;
        "VersionId": string;
    }): Promise<{}>;
    DeleteVersionDeviceGroup(query: {
        "RegionId"?: string;
        "Id": string;
        "ProjectId": string;
    }): Promise<{}>;
    DeleteVersionGroupDevice(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "DeviceGroupId": string;
        "DeviceIdType": string;
        "DeviceIds": string;
    }): Promise<{}>;
    DeleteVersionGroupDeviceById(query: {
        "RegionId": string;
        "ProjectId": string;
        "DeviceGroupId": string;
        "Ids": string;
    }): Promise<{}>;
    DeleteVersionTest(query: {
        "RegionId"?: string;
        "Id": string;
        "ProjectId": string;
    }): Promise<{}>;
    DeleteVersionWhiteDevices(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionType": string;
        "VersionId": string;
        "DeviceIdType": string;
        "DeviceIds": string;
    }): Promise<{}>;
    DeleteVersionWhiteDevicesById(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "VersionType": string;
        "VersionId": string;
        "Ids": string;
    }): Promise<{}>;
    DeployFunctionFile(query: {
        "RegionId"?: string;
        "FileId": string;
        "DeployEnv": number;
        "ProjectId": string;
    }): Promise<{}>;
    DescribeApiGatewayAppSecurity(query: {
        "RegionId"?: string;
        "GatewayAppId": string;
        "ProjectId": string;
    }): Promise<{}>;
    DescribeAppVersion(query: {
        "RegionId"?: string;
        "VersionId": string;
        "ProjectId": string;
    }): Promise<{}>;
    DescribeAssistRTMPServerAddress(query: {
        "RegionId"?: string;
        "DeviceId": string;
        "ProjectId": string;
    }): Promise<{}>;
    DescribeAssistReport(query: {
        "RegionId"?: string;
        "AssistId": string;
        "ProjectId": string;
    }): Promise<{}>;
    DescribeAssistWSServerAddress(query: {
        "RegionId"?: string;
        "DeviceId": string;
        "ProjectId": string;
    }): Promise<{}>;
    DescribeCustomizedFilter(query: {
        "RegionId": string;
        "Id": string;
        "ProjectId": string;
    }): Promise<{}>;
    DescribeDefaultSchema(query: {
        "RegionId"?: string;
        "DeviceModelId": string;
        "ProjectId": string;
    }): Promise<{}>;
    DescribeDevice(query: {
        "RegionId"?: string;
        "DeviceId": string;
        "ProjectId": string;
    }): Promise<{}>;
    DescribeDeviceBrand(query: {
        "RegionId"?: string;
        "DeviceBrandId"?: number;
        "DeviceBrand"?: string;
        "Start"?: string;
        "Length"?: string;
        "ProjectId"?: string;
    }): Promise<{}>;
    DescribeDeviceIdByOuterInfo(query: {
        "RegionId"?: string;
        "ProjectId"?: string;
        "QueryType"?: string;
        "QueryValue"?: string;
    }): Promise<{}>;
    DescribeDeviceInfo(query: {
        "RegionId"?: string;
        "DeviceId"?: string;
        "DeviceToken"?: string;
        "ProjectId"?: string;
    }): Promise<{}>;
    DescribeDeviceModel(query: {
        "RegionId"?: string;
        "DeviceModel"?: string;
        "ProjectId"?: string;
        "DeviceModelId"?: number;
    }): Promise<{}>;
    DescribeDeviceOnlineInfo(query: {
        "RegionId"?: string;
        "Type": string;
        "Value": string;
        "ProjectId": string;
    }): Promise<{}>;
    DescribeDeviceShadow(query: {
        "RegionId"?: string;
        "DeviceId": string;
        "Path": string;
        "ProjectId": string;
        "DeviceModel"?: string;
        "ViewSubscribed"?: boolean;
    }): Promise<{}>;
    DescribeDeviceValiditySchema(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "DeviceModel"?: string;
        "SchemaVersion"?: string;
    }): Promise<{}>;
    DescribeMessage(query: {
        "RegionId"?: string;
        "MessageId": number;
        "ProjectId": string;
    }): Promise<{}>;
    DescribeOpenAccount(query: {
        "RegionId"?: string;
        "IdentityId"?: string;
        "Idp"?: string;
        "IdToken"?: string;
        "OpenId"?: string;
        "ProjectId"?: string;
    }): Promise<{}>;
    DescribeOsVersion(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionId": number;
    }): Promise<{}>;
    DescribeProject(query: {
        "RegionId"?: string;
        "ProjectId": string;
    }): Promise<{}>;
    DescribeProjectAppSecurity(query: {
        "RegionId"?: string;
        "AppId": string;
        "ProjectId": string;
    }): Promise<{}>;
    DescribeShadowSchema(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "DeviceModel": string;
        "IsSimple"?: boolean;
    }): Promise<{}>;
    DescribeVersionDeviceGroup(query: {
        "RegionId"?: string;
        "Id": string;
        "ProjectId": string;
    }): Promise<{}>;
    DiagnosisVersion(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionType": string;
        "VersionId": string;
        "IdType": string;
        "OriginalId": string;
        "DiagnoseStyle": string;
        "EndTime"?: string;
        "StartTime"?: string;
    }): Promise<{}>;
    FindAppVersions(query: {
        "RegionId"?: string;
        "PageSize": number;
        "PageIndex": number;
        "Status"?: string;
        "VersionId"?: string;
        "DeviceModelId"?: string;
        "AppId"?: string;
        "Remark"?: string;
        "ProjectId": string;
    }): Promise<{}>;
    FindCustomizedFilters(query: {
        "RegionId"?: string;
        "VersionId": string;
        "PageIndex": number;
        "PageSize": number;
        "VersionType": string;
        "Name"?: string;
        "ProjectId": string;
    }): Promise<{}>;
    FindOsVersions(query: {
        "RegionId": string;
        "PageIndex": number;
        "PageSize": number;
        "ProjectId": string;
        "VersionId"?: string;
        "DeviceModelId"?: string;
        "SystemVersion"?: string;
        "Status"?: string;
        "IsMilestone"?: string;
        "Remark"?: string;
    }): Promise<{}>;
    FindPrepublishPassedDevices(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "PageIndex": number;
        "PageSize": number;
        "DeviceId"?: string;
        "PrepublishId": string;
    }): Promise<{}>;
    FindPrepublishesByParentId(query: {
        "RegionId"?: string;
        "ParentId": number;
        "ProjectId": string;
    }): Promise<{}>;
    FindPrepublishesByVersionId(query: {
        "RegionId"?: string;
        "VersionId": number;
        "VersionType": string;
        "ProjectId": string;
    }): Promise<{}>;
    FindVersionBlackDevices(query: {
        "RegionId": string;
        "VersionId": string;
        "VersionType": string;
        "PageIndex": number;
        "PageSize": number;
        "ProjectId": string;
        "DeviceId"?: string;
        "OriginalId"?: string;
    }): Promise<{}>;
    FindVersionDeviceGroups(query: {
        "RegionId"?: string;
        "PageSize": number;
        "ProjectId": string;
        "DeviceId"?: string;
        "OriginalId"?: string;
        "Name"?: string;
        "PageIndex": number;
    }): Promise<{}>;
    FindVersionGroupDevices(query: {
        "RegionId"?: string;
        "PageIndex": number;
        "PageSize": number;
        "DeviceGroupId": string;
        "OriginalId"?: string;
        "DeviceId"?: string;
        "ProjectId": string;
    }): Promise<{}>;
    FindVersionMessageSendRecords(query: {
        "RegionId": string;
        "PageIndex": number;
        "PageSize": number;
        "ProjectId": string;
        "VersionType"?: string;
        "MessageType"?: string;
        "VersionId"?: string;
    }): Promise<{}>;
    FindVersionMessages(query: {
        "RegionId": string;
        "PageIndex": number;
        "PageSize": number;
        "VersionId": string;
        "VersionType": string;
        "ProjectId": string;
        "MessageType"?: string;
        "TestId"?: string;
        "SendRecordId"?: string;
        "DeviceId"?: string;
    }): Promise<{}>;
    FindVersionWhiteDevices(query: {
        "RegionId": string;
        "VersionId": string;
        "VersionType": string;
        "PageIndex": number;
        "PageSize": number;
        "ProjectId": string;
        "DeviceId"?: string;
        "OriginalId"?: string;
    }): Promise<{}>;
    GenerateAssistFileUploadUrl(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "DeviceId": string;
        "Filename": string;
    }): Promise<{}>;
    GenerateFunctionFileUploadMeta(query: {
        "RegionId"?: string;
        "FileName": string;
        "ProjectId": string;
    }): Promise<{}>;
    GenerateOssPostPolicy(query: {
        "RegionId"?: string;
        "Ext": string;
        "AccessId": string;
        "AccessKey": string;
        "ProjectId": string;
    }): Promise<{}>;
    GenerateOssUploadMeta(query: {
        "RegionId"?: string;
        "Ext": string;
        "ProjectId": string;
    }): Promise<{}>;
    GenerateSdkDownloadInfo(query: {
        "RegionId"?: string;
        "AppId": string;
        "OsType": number;
        "PkgName": string;
        "ProjectId": string;
        "CertFileObjectKey": string;
        "Sdks": string;
    }): Promise<{}>;
    GenerateSysAppDownloadInfo(query: {
        "RegionId"?: string;
        "SignMode": string;
        "OsType": number;
        "PkgName": string;
        "ProjectId": string;
        "CertFileObjectKey"?: string;
        "Plugins": string;
    }): Promise<{}>;
    GetDeviceSystemUpdateFunnelEvents(query: {
        "RegionId": string;
        "ProjectId": string;
        "OriginalId"?: string;
        "TargetVersion"?: string;
        "IdType"?: string;
    }): Promise<{}>;
    GetNamespaceData(query: {
        "RegionId"?: string;
        "Namespace": string;
        "AuthType": string;
        "ProjectId": string;
        "DeviceIdType"?: string;
        "DeviceId"?: string;
        "AccountType"?: string;
        "AccountId"?: string;
    }): Promise<{}>;
    GetNamespaceStatisticsData(query: {
        "RegionId"?: string;
        "Namespace": string;
        "DimensionType": string;
        "ProjectId": string;
        "StartTime"?: string;
        "EndTime"?: string;
    }): Promise<{}>;
    GetOssUploadMeta(query: {
        "RegionId": string;
        "Ext": string;
        "ProjectId": string;
    }): Promise<{}>;
    InvokeFunction(query: {
        "RegionId"?: string;
        "FileId": number;
        "FunctionName": string;
        "Env": number;
        "Parameters": string;
        "ProjectId": string;
    }): Promise<{}>;
    ListApiGatewayApps(query: {
        "RegionId"?: string;
        "ProjectId": string;
    }): Promise<{}>;
    ListApps(query: {
        "RegionId"?: string;
        "ProjectId": string;
    }): Promise<{}>;
    ListAssistActionDetails(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "ActionTimestamp": string;
    }): Promise<{}>;
    ListAssistDevices(query: {
        "RegionId"?: string;
        "PageIndex": number;
        "PerPage": number;
        "ProjectId": string;
        "Condition"?: string;
    }): Promise<{}>;
    ListAssistHistories(query: {
        "RegionId"?: string;
        "PageIndex": number;
        "ProjectId": string;
        "PerPage": number;
        "Condition"?: string;
    }): Promise<{}>;
    ListAssistHistoryDetails(query: {
        "RegionId"?: string;
        "AssistId": string;
        "ProjectId": string;
    }): Promise<{}>;
    ListClientPluginVersions(query: {
        "RegionId"?: string;
        "PkgName": string;
        "OsType": string;
    }): Promise<{}>;
    ListClientPlugins(query: {
        "RegionId"?: string;
        "OsType": string;
    }): Promise<{}>;
    ListClientSdks(query: {
        "RegionId"?: string;
        "OsType": string;
    }): Promise<{}>;
    ListConnectLogs(query: {
        "RegionId"?: string;
        "DeviceId": string;
        "PageSize"?: number;
        "StartTime"?: number;
        "EndTime"?: number;
        "PageIndex"?: number;
        "ProjectId": string;
    }): Promise<{}>;
    ListDeployedFunctions(query: {
        "RegionId"?: string;
        "FileId": number;
        "ProjectId": string;
    }): Promise<{}>;
    ListDeviceBrands(query: {
        "RegionId"?: string;
        "DeviceBrandId"?: number;
        "DeviceBrand"?: string;
        "Start"?: string;
        "Length"?: string;
        "ProjectId"?: string;
    }): Promise<{}>;
    ListDeviceModel(query: {
        "RegionId"?: string;
        "ProjectId": string;
    }): Promise<{}>;
    ListDeviceModels(query: {
        "RegionId"?: string;
        "Length"?: string;
        "DeviceModel"?: string;
        "DeviceBrand"?: string;
        "Start"?: string;
        "DeviceModelId"?: number;
        "ProjectId"?: string;
        "DeviceBrandId"?: number;
    }): Promise<{}>;
    ListDeviceTypes(query: {
        "RegionId"?: string;
        "ProjectId"?: string;
    }): Promise<{}>;
    ListDevices(query: {
        "RegionId"?: string;
        "DeviceModelId"?: number;
        "DeviceModel"?: string;
        "Start"?: string;
        "Length"?: string;
        "ProjectId"?: string;
    }): Promise<{}>;
    ListFunctionExecuteLog(query: {
        "RegionId"?: string;
        "FileId": number;
        "FunctionName": string;
        "Env": number;
        "ProjectId": string;
        "PageIndex"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ListFunctionFiles(query: {
        "RegionId"?: string;
        "FileType": number;
        "ProjectId": string;
        "PageIndex"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ListFunctionFilesByProjectId(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "PageIndex"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ListMessageAcks(query: {
        "RegionId"?: string;
        "PageSize"?: number;
        "DeviceId"?: string;
        "MessageId"?: number;
        "PageIndex"?: number;
        "ProjectId": string;
    }): Promise<{}>;
    ListMessageReceivers(query: {
        "RegionId"?: string;
        "MessageId": string;
        "ProjectId": string;
        "PageIndex"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ListNamespaces(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "AuthType"?: string;
    }): Promise<{}>;
    ListOfflineMessages(query: {
        "RegionId"?: string;
        "Type": string;
        "Value": string;
        "PageSize"?: number;
        "PageIndex"?: number;
        "ProjectId": string;
    }): Promise<{}>;
    ListOpenAccountLinks(query: {
        "RegionId"?: string;
        "ProjectId"?: string;
        "IdentityId"?: string;
        "Idp"?: string;
        "OpenId"?: string;
    }): Promise<{}>;
    ListOpenAccounts(query: {
        "RegionId"?: string;
        "Start"?: number;
        "Mobile"?: string;
        "Email"?: string;
        "DisplayName"?: string;
        "ProjectId"?: string;
        "Length"?: number;
    }): Promise<{}>;
    ListPreChecks(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    ListProjectApps(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "PageIndex"?: number;
        "PageSize"?: number;
        "Keywords"?: string;
    }): Promise<{}>;
    ListProjects(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    ListRpcServices(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "PageIndex"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ListSchemaSubscribes(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "DeviceModel"?: string;
        "PageIndex"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ListServices(query: {
        "RegionId": string;
    }): Promise<{}>;
    ListShadowSchemaDeviceModels(query: {
        "RegionId"?: string;
        "ProjectId": string;
    }): Promise<{}>;
    ListShadowSchemas(query: {
        "RegionId"?: string;
        "QueryType"?: string;
        "QueryValue"?: string;
        "PageIndex"?: number;
        "PageSize"?: number;
        "ProjectId": string;
    }): Promise<{}>;
    ListSupportFeatures(query: {
        "RegionId"?: string;
    }): Promise<{}>;
    ListTriggers(query: {
        "RegionId"?: string;
        "Namespace": string;
        "ProjectId": string;
        "PageIndex"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    ListUpstreamAppKeyRelations(query: {
        "RegionId"?: string;
        "AppServerId": number;
        "ProjectId": string;
        "PageSize"?: number;
        "PageIndex"?: number;
    }): Promise<{}>;
    ListUpstreamAppServers(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "PageIndex"?: string;
        "PageSize"?: string;
    }): Promise<{}>;
    ListVersionDeviceGroups(query: {
        "RegionId"?: string;
        "ProjectId": string;
    }): Promise<{}>;
    PublishAppVersion(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionId": string;
        "SendMessage": boolean;
    }): Promise<{}>;
    PublishOsVersion(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionId": string;
        "SendMessage": boolean;
    }): Promise<{}>;
    PushMessage(query: {
        "RegionId"?: string;
        "Act": string;
        "PkgContent": string;
        "ReceiverType": string;
        "ReceiverValues": string;
        "ProjectId": string;
        "AppKey": string;
        "Type": number;
        "Desc"?: string;
        "Uri"?: string;
        "CustomContent"?: string;
        "ExpiredTime"?: number;
        "Title"?: string;
        "AppPackage": string;
    }): Promise<{}>;
    PushVersionMessage(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionId": string;
        "VersionType": string;
    }): Promise<{}>;
    QueryPrepublishPassedDeviceCount(query: {
        "RegionId"?: string;
        "PrepublishId": string;
        "ProjectId": string;
    }): Promise<{}>;
    SubmitAssistReport(query: {
        "RegionId"?: string;
        "AssistId": string;
        "AssistDescription"?: string;
        "AssistResult"?: string;
        "AssistTag"?: string;
        "AssistReason"?: string;
        "DeviceModel"?: string;
        "ProjectId": string;
    }): Promise<{}>;
    UpdateApiGatewayAppStatus(query: {
        "RegionId"?: string;
        "GatewayAppId": string;
        "Status": number;
        "ProjectId": string;
    }): Promise<{}>;
    UpdateAppBlackWhiteVersions(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionId": string;
        "WhiteAppVersions"?: string;
        "BlackAppVersions"?: string;
    }): Promise<{}>;
    UpdateAppVersion(query: {
        "RegionId": string;
        "ProjectId": string;
        "BlackVersionList"?: string;
        "IsAllowNewInstall"?: string;
        "AppId"?: string;
        "AppVersion"?: string;
        "VersionCode"?: string;
        "InstallType"?: string;
        "Remark"?: string;
        "IsForceUpgrade"?: string;
        "IsSilentUpgrade"?: string;
        "IsNeedRestart"?: string;
        "PackageUrl"?: string;
        "ReleaseNote"?: string;
        "WhiteVersionList"?: string;
        "RestartType"?: string;
        "RestartAppType"?: string;
        "RestartAppParam"?: string;
        "DeviceAdapterList"?: string;
        "VersionId"?: string;
        "ApkMd5"?: string;
    }): Promise<{}>;
    UpdateAppVersionReleaseNote(query: {
        "RegionId"?: string;
        "VersionId": string;
        "ReleaseNote": string;
        "ProjectId": string;
    }): Promise<{}>;
    UpdateAppVersionRemark(query: {
        "RegionId"?: string;
        "VersionId": string;
        "Remark": string;
        "ProjectId": string;
    }): Promise<{}>;
    UpdateAppVersionStatus(query: {
        "RegionId": string;
        "ProjectId": string;
        "Id": string;
        "Status"?: string;
    }): Promise<{}>;
    UpdateCustomizedFilter(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "Name": string;
        "Value": string;
        "ValueType": string;
        "ValueCompareType": string;
        "Id": number;
        "BlackWhiteType": string;
    }): Promise<{}>;
    UpdateDeviceModel(query: {
        "RegionId"?: string;
        "ModelName"?: string;
        "Id"?: string;
        "BrandName"?: string;
        "Description"?: string;
        "DeviceType"?: string;
        "CanCreateDeviceId"?: string;
        "ProjectId"?: string;
        "InitUsageType"?: string;
        "HardwareType"?: string;
        "SecurityChip"?: string;
        "OsPlatform"?: string;
        "ObjectKey"?: string;
        "DeviceName"?: string;
    }): Promise<{}>;
    UpdateNamespaceData(query: {
        "RegionId"?: string;
        "Namespace": string;
        "AuthType": string;
        "Path": string;
        "OldData": string;
        "NewData": string;
        "ProjectId": string;
        "DeviceIdType"?: string;
        "DeviceId"?: string;
        "AccountType"?: string;
        "AccountId"?: string;
    }): Promise<{}>;
    UpdateOsBlackWhiteVersions(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionId": string;
        "WhiteVersions"?: string;
        "BlackVersions"?: string;
    }): Promise<{}>;
    UpdateOsVersion(query: {
        "RegionId": string;
        "IsForceNightUpgrade": string;
        "ProjectId": string;
        "DeviceModelId": string;
        "SystemVersion": string;
        "ReleaseNote": string;
        "IsForceUpgrade": string;
        "NightUpgradeDownloadType": string;
        "NightUpgradeIsShowTip": string;
        "NightUpgradeIsAllowedCancel": string;
        "RomList": string;
        "Id": string;
        "IsMilestone": string;
        "EnableMobileDownload": string;
        "Remark"?: string;
        "BlackVersionList"?: string;
        "WhiteVersionList"?: string;
        "MaxClientVersion"?: string;
        "MinClientVersion"?: string;
        "MobileDownloadMaxSize"?: string;
    }): Promise<{}>;
    UpdateOsVersionReleaseNote(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionId": string;
        "ReleaseNote": string;
    }): Promise<{}>;
    UpdateOsVersionRemark(query: {
        "RegionId": string;
        "ProjectId": string;
        "VersionId": string;
        "Remark": string;
    }): Promise<{}>;
    UpdateOsVersionStatus(query: {
        "RegionId"?: string;
        "Id": string;
        "ProjectId": string;
        "Status"?: string;
    }): Promise<{}>;
    UpdateProject(query: {
        "RegionId"?: string;
        "Name": string;
        "Description": string;
        "ProjectId": string;
    }): Promise<{}>;
    UpdateSchemaSubscribe(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "DeviceModel": string;
        "SubscribeList"?: string;
        "SchemaVersion"?: string;
    }): Promise<{}>;
    UpdateShadowSchema(query: {
        "RegionId"?: string;
        "ProjectId": string;
        "Id": string;
        "DeviceModelId": string;
        "AuthType"?: string;
        "Namespace"?: string;
        "Schema"?: string;
    }): Promise<{}>;
    UpdateTrigger(query: {
        "RegionId"?: string;
        "Id": number;
        "ProjectId": string;
        "Sandbox"?: number;
        "Production"?: number;
    }): Promise<{}>;
    UpdateUpstreamAppServer(query: {
        "RegionId"?: string;
        "Id": number;
        "Name"?: string;
        "Tags"?: string;
        "ProjectId"?: string;
    }): Promise<{}>;
    UpdateVersionDeviceGroup(query: {
        "RegionId"?: string;
        "Name": string;
        "ProjectId": string;
        "Description"?: string;
        "Id"?: string;
    }): Promise<{}>;
    UpdateVersionPrepublishActiveStatus(query: {
        "RegionId"?: string;
        "PrepublishId": string;
        "IsActive": string;
        "ProjectId": string;
    }): Promise<{}>;
    AddVersionWhiteDevicesByDeviceGroups(query: {
        "RegionId": string;
        "VersionType": string;
        "GroupIds": string;
        "VersionId": string;
        "ProjectId": string;
    }): Promise<{}>;
    FindVersionTests(query: {
        "RegionId"?: string;
        "PageIndex": number;
        "PageSize": number;
        "VersionId"?: string;
        "VersionType"?: string;
        "ProjectId": string;
    }): Promise<{}>;
    GetDeviceAppUpdateFunnelEvents(query: {
        "RegionId": string;
        "ProjectId": string;
        "PackageName"?: string;
        "TargetVersionCode"?: string;
        "IdType"?: string;
        "OriginalId"?: string;
    }): Promise<{}>;
    FindCustomizedProperties(query: {
        "RegionId"?: string;
        "VersionId": string;
        "PageIndex": number;
        "PageSize": number;
        "VersionType": string;
        "Name"?: string;
        "ProjectId": string;
    }): Promise<{}>;
}
export default IOVCC;