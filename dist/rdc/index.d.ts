interface RDC {
    AddEnterpriseMember(query: {
        "RegionId"?: string;
        "InstanceId": string;
        "StaffId": string;
        "Operator": string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    CreateEnterprise(query: {
        "RegionId"?: string;
        "Name": string;
        "Domain": string;
        "CreatorStaffId": string;
        "Description"?: string;
        "Emails"?: string;
    }): Promise<{
        "Data": {
            "Name": string;
            "Id": number;
            "Identifier": string;
        };
        "Message": string;
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    CreateWorkitem(query: {
        "RegionId"?: string;
        "CorpIdentifier": string;
        "Author": string;
        "AssignedTo": string;
        "TemplateId": number;
        "Subject": string;
        "Stamp": string;
        "AKProjectId": number;
        "Description"?: string;
        "CfList"?: string;
        "Verifier"?: string;
        "PriorityId"?: number;
        "SeriousLevelId"?: number;
        "WatcherUsers"?: string;
        "ModuleIds"?: string;
    }): Promise<{
        "Data": number;
        "RequestId": string;
        "Success": boolean;
        "Code": number;
    }>;
    GetBindedUserByDingId(query: {
        "RegionId"?: string;
        "DingId": string;
    }): Promise<{
        "result": {
            "isValid": boolean;
            "id": number;
            "uuid": string;
            "mainAccountType": string;
            "aliyunUser": {
                "id": number;
                "nickName": string;
                "email": string;
                "kp": string;
                "head": string;
                "taobaoNick": string;
                "codeUserName": any;
                "aliyunId": string;
                "havanaId": string;
                "accountStructure": number;
                "realname": any;
                "parentPk": string;
                "partnerPk": string;
            };
            "dingtalkUser": any;
            "antFinanialUserDTO": any;
            "userProfileDTO": {
                "userId": number;
                "name": any;
                "englishName": string;
                "nickName": string;
                "mobile": string;
                "email": string;
                "avatar": string;
                "dataSource": string;
                "codeAccount": any;
                "weibo": any;
                "aliWW": any;
                "tbWW": any;
                "qq": any;
                "userOuterId": any;
                "createdAt": number;
            };
            "ddcUser": any;
            "internalUser": any;
            "ldapUserDTO": any;
            "avatar": any;
            "nickName": string;
            "guid": string;
        };
        "success": boolean;
        "errorCode": any;
        "message": any;
    }>;
    GetCustomFieldsByTemplateId(query: {
        "RegionId"?: string;
        "AKProjectId": number;
        "TemplateId": number;
        "CorpIdentifier": string;
    }): Promise<{}>;
    GetIssueById(query: {
        "RegionId"?: string;
        "Id": number;
        "CorpIdentifier": string;
    }): Promise<{}>;
    GetProjectMembers(query: {
        "RegionId"?: string;
        "CorpIdentifier": string;
        "ProjectId": number;
        "StaffId"?: string;
    }): Promise<{}>;
    GetUserByAliyunPk(query: {
        "RegionId"?: string;
        "Pk": string;
    }): Promise<{
        "result": {
            "isValid": boolean;
            "id": number;
            "uuid": string;
            "mainAccountType": string;
            "aliyunUser": {
                "id": number;
                "nickName": string;
                "email": string;
                "kp": string;
                "head": string;
                "taobaoNick": string;
                "codeUserName": any;
                "aliyunId": string;
                "havanaId": string;
                "accountStructure": number;
                "realname": any;
                "parentPk": string;
                "partnerPk": string;
            };
            "dingtalkUser": any;
            "antFinanialUserDTO": any;
            "userProfileDTO": {
                "userId": number;
                "name": any;
                "englishName": string;
                "nickName": string;
                "mobile": string;
                "email": string;
                "avatar": string;
                "dataSource": string;
                "codeAccount": any;
                "weibo": any;
                "aliWW": any;
                "tbWW": any;
                "qq": any;
                "userOuterId": any;
                "createdAt": number;
            };
            "ddcUser": any;
            "internalUser": any;
            "ldapUserDTO": any;
            "avatar": any;
            "nickName": string;
            "guid": string;
        };
        "success": boolean;
        "errorCode": any;
        "message": any;
    }>;
    GetWorkitemById(query: {
        "RegionId"?: string;
        "Id": number;
        "CorpIdentifier": string;
    }): Promise<{}>;
    SearchProjectsByRegion(query: {
        "RegionId"?: string;
        "CorpIdentifier": string;
        "Region": string;
        "Status"?: string;
        "ToPage"?: number;
        "PageSize"?: number;
    }): Promise<{}>;
    SearchTestCase(query: {
        "RegionId"?: string;
        "CorpIdentifier": string;
        "AkProjectId": string;
        "PageSize"?: number;
        "CaseTag"?: string;
        "PageNum"?: string;
        "CreateDateStart"?: string;
        "CreateDateEnd"?: string;
        "UpdateDateStart"?: string;
        "UpdateDateEnd"?: string;
    }): Promise<{}>;
    SearchWorkitem(query: {
        "RegionId"?: string;
        "AKProjectId": number;
        "CorpIdentifier": string;
        "Stamp"?: string;
        "ToPage"?: number;
        "PageSize"?: number;
        "SprintId"?: number;
    }): Promise<{}>;
    UpdateWorkitem(query: {
        "RegionId"?: string;
        "AKProjectId": number;
        "CorpIdentifier": string;
        "Modifier": string;
        "IssueId": number;
        "AssignedTo"?: string;
        "TemplateId"?: number;
        "Subject"?: string;
        "Description"?: string;
        "Stamp"?: string;
        "CfList"?: string;
        "Status"?: string;
        "Priority"?: string;
        "SeriousLevel"?: string;
        "Verifier"?: string;
        "SprintId"?: number;
        "IgnoreCheck"?: boolean;
        "Cfs"?: string;
    }): Promise<{}>;
    AddRamMember(query: {
        "RegionId"?: string;
        "CorpIdentifier": string;
        "StaffIdentifier": string;
    }): Promise<{}>;
    ApproveJoinCompany(query: {
        "RegionId"?: string;
        "CorpIdentifier": string;
        "ApplicationIds": string;
    }): Promise<{}>;
    GetChangeLog(query: {
        "RegionId"?: string;
        "TargetType": string;
        "TargetIds": string;
        "CorpIdentifier": string;
    }): Promise<{}>;
    GetJoinCode(query: {
        "RegionId"?: string;
        "CorpIdentifier": string;
    }): Promise<{}>;
    JoinCompany(query: {
        "RegionId"?: string;
        "Code"?: string;
    }): Promise<{}>;
    SearchWorkitemWithTotalCount(query: {
        "RegionId"?: string;
        "AKProjectId": number;
        "CorpIdentifier": string;
        "Stamp"?: string;
        "ToPage"?: number;
        "PageSize"?: number;
        "SprintId"?: number;
    }): Promise<{}>;
    SyncUserToRdc(query: {
        "RegionId"?: string;
        "LoginTicket"?: string;
    }): Promise<{}>;
}
export default RDC;