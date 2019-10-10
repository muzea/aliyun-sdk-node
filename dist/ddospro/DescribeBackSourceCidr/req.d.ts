interface DescribeBackSourceCidrRequest {
    "RegionId"?: string;
    "SourceIp"?: string;
    "Lang"?: string;
    /**
    * 要查询的线路类型。取值：
    * - **unicom**：中国联通
    * - **telecom**：中国电信
    * - **mobile**：中国移动
    * - **bgp**：BGP线路
    * @example `bgp`
    */ "Line"?: string;
    /**
    * 要查询的地区。取值：
    * > 当Line传入bgp时必需。
    * - **hangzhou**：杭州
    * - **beijing**：北京
    * - **shenzhen**：深圳
    * @example `hangzhou`
    */ "Region"?: string;
}
export { DescribeBackSourceCidrRequest };