interface UpdateOwnedLocalJoinPermissionRequest {
    "RegionId"?: string;
    /**
    * 专用入网凭证ID，用来指定要更新的入网凭证。
    * @example `123`
    */ "JoinPermissionId": string;
    /**
    * 专用入网凭证所采用的频段的频段ID，用于更新旧频段。
    * @example `201`
    */ "FreqBandPlanGroupId"?: number;
    /**
    * 专用入网凭证采用的LoRaWAN Class模式，用于更新旧的 Class 模式。可取值：**A**、**B**、**C**。
    * @example `A`
    */ "ClassMode"?: string;
    /**
    * 自定义入网凭证名称，用于更新旧名称。
    * @example `凭证1`
    */ "JoinPermissionName"?: string;
}
export { UpdateOwnedLocalJoinPermissionRequest };