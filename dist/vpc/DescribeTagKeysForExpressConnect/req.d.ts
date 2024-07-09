export interface DescribeTagKeysForExpressConnectRequest {
    /**
     * 资源类型。取值：
     * - **PHYSICALCONNECTION**：表示高速通道专线实例。
     * - **VIRTUALBORDERROUTER**：表示边界路由器。
     * - **ROUTERINTERFACE**：表示VBR上连。
     * @example `PHYSICALCONNECTION`
     */
    "ResourceType"?: string;
    /**
     * 标签名称的关键字。支持模糊匹配，即输入关键字即可查询包含该关键字的所有标签。
     * @example `keyword`
     */
    "Keyword"?: string;
    /**
     * 资源所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "MaxResult"?: number;
    /**
     * 资源ID。最多支持输入20个资源ID。
     */
    "ResourceId"?: string[];
}
