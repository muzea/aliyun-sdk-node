interface DescribeAppsRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 应用ID，通过控制台开通创建，长度最大8个字节，不填则返回该用户下所有应用信息。
    * @example `yourAppId`
    */ "AppId"?: string;
    /**
    * 状态：
    * - **1**：可用。
    * - **2**：停用。
    * - **3**：欠费停用。
    * @example `1`
    */ "Status"?: string;
    /**
    * 排序，不填默认**desc**取最近记录。取值： 、
    * - **asc**：递增。
    *
    * - **desc**：递减。
    * @example `asc`
    */ "Order"?: string;
    /**
    * 不填则默认**1**页，取值必须大于**0**。
    * @example `1`
    */ "PageNum"?: number;
    /**
    * 不填则默认为**10**， 取值必须大于**0**。
    * @example `2`
    */ "PageSize"?: number;
}
export { DescribeAppsRequest };