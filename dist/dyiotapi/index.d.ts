interface DYIOTAPI {
    QosGetParam(query: {
        "RegionId"?: string;
        "AppId": string;
        "Operator": string;
        "SourcePrivateIpAddress": string;
        "Msisdn"?: string;
        "Imsi"?: string;
        "Longitude"?: string;
        "Latitude"?: string;
        "SourcePublicIpAddress"?: string;
    }): Promise<{}>;
    QosSpeedup(query: {
        "RegionId"?: string;
        "AppId": string;
        "Operator": string;
        "ServiceMode": number;
        "ServiceType": number;
        "SourcePrivateIpAddress": string;
        "SourcePublicIpAddress": string;
        "DestinationIpAddress": string;
        "Duration": number;
        "UrlResponseBody": string;
        "UrlResponseStatusCode": number;
        "Msisdn"?: string;
        "Imsi"?: string;
        "Longitude"?: string;
        "Latitude"?: string;
        "SourcePort"?: number;
        "DestinationPort"?: number;
    }): Promise<{}>;
    QueryCardFlowInfo(query: {
        "RegionId"?: string;
        "Iccid": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    QueryCardInfo(query: {
        "RegionId"?: string;
        "Iccid": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    QueryCardStatus(query: {
        "RegionId"?: string;
        "Iccid": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    QueryIotCardOfferDtl(query: {
        "RegionId"?: string;
        "Iccid": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DoClearAuth(query: {
        "RegionId"?: string;
        "Iccid": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DoIotChgBindOrUnBind(query: {
        "RegionId"?: string;
        "Iccid": string;
        "Imei": string;
        "OpionType": string;
        "OwnerId"?: number;
        "NewImei"?: string;
        "MidChannelId"?: string;
    }): Promise<{}>;
    DoIotIsImeiExist(query: {
        "RegionId"?: string;
        "Imei": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DoIotPoolRecharge(query: {
        "RegionId"?: string;
        "PoolId": string;
        "Amount": number;
        "OwnerId"?: number;
    }): Promise<{}>;
    DoIotPostImei(query: {
        "RegionId"?: string;
        "Imei": string;
        "OwnerId"?: number;
        "Comments"?: string;
        "DeviceType"?: string;
    }): Promise<{}>;
    DoIotRecharge(query: {
        "RegionId"?: string;
        "Iccid": string;
        "OfferIds": string;
        "OutId": string;
        "EffCode": string;
        "OwnerId"?: number;
        "Amount"?: number;
        "OrderNum"?: number;
    }): Promise<{}>;
    DoIotServiceStatusControl(query: {
        "RegionId"?: string;
        "Iccid": string;
        "ServiceType": string;
        "OperationType": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DoIotSetRemindConfig(query: {
        "RegionId"?: string;
        "BizType": string;
        "BizId": string;
        "OperationType": string;
        "OwnerId"?: number;
        "ConfigInfo"?: string;
    }): Promise<{}>;
    DoIotTransSilence(query: {
        "RegionId"?: string;
        "Iccid": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DoIotUpdateDeviceSn(query: {
        "RegionId"?: string;
        "Iccid": string;
        "DeviceSn": string;
        "OperationType": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DoIotUserStopResume(query: {
        "RegionId"?: string;
        "Iccid": string;
        "OptionType": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    DoSendIotSms(query: {
        "RegionId"?: string;
        "SignName": string;
        "TemplateCode": string;
        "PhoneNumbers": string;
        "TemplateParam": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    QosRelease(query: {
        "RegionId"?: string;
        "AppId": string;
        "QosId": string;
    }): Promise<{}>;
    QueryGprsStatus(query: {
        "RegionId"?: string;
        "Iccid": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    QueryPersonalInfo(query: {
        "RegionId"?: string;
        "Iccid": string;
        "OwnerId"?: number;
    }): Promise<{}>;
}
export default DYIOTAPI;