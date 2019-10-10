interface DescribeSourceServersRequest {
    "RegionId"?: string;
    /**
    * @example `000000`
    */ "OwnerId"?: number;
    "SourceId"?: string[];
    /**
    * 迁移任务ID。
    * @example `j-xxxxxxxxxxxxxxx`
    */ "JobId"?: string;
    /**
    * 迁移源状态。取值范围：
    * - Unavailable（不可用，包括离线和出错）
    * - Available（在线）
    * - InUse（迁移中）
    * - Deleting（删除中）
    * @example `Available`
    */ "State"?: string;
    /**
    * 迁移源名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * 默认值：空。
    * @example `MySourceServer`
    */ "Name"?: string;
    /**
    * 返回的迁移源列表的页码。起始值：1。
    * 默认值：1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：50。
    * 默认值：10。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeSourceServersRequest };