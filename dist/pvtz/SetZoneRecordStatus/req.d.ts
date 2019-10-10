interface SetZoneRecordStatusRequest {
    "RegionId"?: string;
    /**
    * 解析记录ID。
    * @example `5809`
    */ "RecordId": number;
    /**
    * 解析记录状态。取值：
    * - **ENABLE**: 启用解析
    * - **DISABLE**: 暂停解析
    * @example `DISABLE`
    */ "Status": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户Ip。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
}
export { SetZoneRecordStatusRequest };