interface DeleteZoneRecordRequest {
    "RegionId"?: string;
    /**
    * 解析记录ID。
    * @example `5808`
    */ "RecordId": number;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * 用户Ip。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
}
export { DeleteZoneRecordRequest };