interface CreateStorageSetRequest {
    /**
    * 存储集所属地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 存储集所属可用区。您可以调用[DescribeZones](~~25610~~)查询最新的可用区列表。
    * @example `cn-hangzhou-g`
    */ "ZoneId": string;
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
    /**
    * 存储集最大分区，StorageSet支持的最大分区号。取值范围：大于2，最高不能超过调用[DescribeAccountAttributes](~~73772~~)后显示的权益配额限制。
    * 默认值：2。
    * @example `10`
    */ "MaxPartitionNumber"?: number;
}
export { CreateStorageSetRequest };