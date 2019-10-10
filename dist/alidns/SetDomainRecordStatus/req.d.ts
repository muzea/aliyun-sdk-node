interface SetDomainRecordStatusRequest {
    "RegionId"?: string;
    /**
    * 解析记录的ID。
    * @example `9999985`
    */ "RecordId": string;
    /**
    * 解析记录状态。取值：
    * - **Enable**: 启用解析
    * - **Disable**: 暂停解析
    * @example `Disable`
    */ "Status": string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户端IP。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
}
export { SetDomainRecordStatusRequest };