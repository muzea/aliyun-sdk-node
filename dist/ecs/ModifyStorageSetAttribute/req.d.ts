interface ModifyStorageSetAttributeRequest {
    /**
    * 存储集所属地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 存储集ID。
    * @example `ss-StorageSetId`
    */ "StorageSetId": string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * 存储集名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * @example `storageSetTest`
    */ "StorageSetName"?: string;
    /**
    * 存储集描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。
    * @example `storageSetTest`
    */ "Description"?: string;
}
export { ModifyStorageSetAttributeRequest };