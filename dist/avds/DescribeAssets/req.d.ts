interface DescribeAssetsRequest {
    "RegionId"?: string;
    /**
    * 指定访问者源IP地址。
    * @example `1.2.3.4`
    */ "SourceIp"?: string;
    /**
    * 指定查询特定资产认证状态的资产信息。
    * - **WaitingForVerification**：等待验证
    * - **VerificationSuccess**：验证成功
    * - **VerificationFailure**：验证失败
    * - **Verifying**：验证中
    * @example `WaitingForVerification`
    */ "Status"?: string;
    /**
    * 指定查询特定资产信息。
    * @example `test`
    */ "Search"?: string;
    "Types"?: string[];
    "AssetGroupId"?: string;
    /**
    * 指定返回特定资产来源下的资产信息。可选
    * - **UserAdd**：用户添加
    * - **AutoImport**：自动导入
    * - **ScanDiscover**：资产发现
    * @example `UserAdd`
    */ "Source"?: string;
    "Assets"?: string[];
    /**
    * 资产创建时间的开始区间。
    * @example `1112121000000`
    */ "GmtCreateFrom"?: number;
    /**
    * 资产创建时间的结束区间。
    * @example `1212121000000`
    */ "GmtCreateTo"?: number;
    /**
    * 指定返回列表的当前页码。
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 指定返回的列表每页的数据条数。
    * @example `20`
    */ "PageSize"?: number;
}
export { DescribeAssetsRequest };