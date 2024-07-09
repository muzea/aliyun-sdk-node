export interface GetInstanceConsoleOutputRequest {
    /**
     * 实例所在地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `i-bp1c1xhsrac2coiw****`
     */
    "InstanceId": string;
    /**
     * 是否去除返回文本中的排版符号。取值范围：
     * - true：去除
     * - false：不去除
     * 默认值：false
     * @example `false`
     */
    "RemoveSymbols"?: boolean;
}
