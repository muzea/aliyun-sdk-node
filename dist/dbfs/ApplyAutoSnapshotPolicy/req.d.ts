export interface ApplyAutoSnapshotPolicyRequest {
    /**
     * 自动快照策略ID。
     * @example `sp-z5siir3iq3m**********`
     */
    "PolicyId": string;
    /**
     * 传入的需要设置该自动快照策略的数据库文件系统ID列表，传入的参数需要保持JSON数组格式，ID之间用半角逗号（,）隔开。例如：["dbfs-1luaxt4vs1iusrd`*******`", "dbfs-cxbyu98fspcbvm`******`“]。
     */
    "DbfsIds": string[];
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
