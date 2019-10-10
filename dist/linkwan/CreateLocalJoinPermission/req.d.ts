interface CreateLocalJoinPermissionRequest {
    "RegionId"?: string;
    /**
    * 专用入网凭证所采用的频段的频段ID。
    * @example `101`
    */ "FreqBandPlanGroupId": number;
    /**
    * 专用入网凭证采用的LoRaWAN Class模式。可取值：**A**、**B**、**C**。
    * @example `A`
    */ "ClassMode": string;
    /**
    * 专用入网凭证是否使用阿里云统一JoinEUI。
    * @example `true`
    */ "UseDefaultJoinEui": boolean;
    /**
    * 自定义专用入网凭证名称。
    * @example `test`
    */ "JoinPermissionName": string;
}
export { CreateLocalJoinPermissionRequest };