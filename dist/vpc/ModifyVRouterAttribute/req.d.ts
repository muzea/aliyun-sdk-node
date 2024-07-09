export interface ModifyVRouterAttributeRequest {
    /**
     * 要修改的路由器所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 路由器的ID。
     * @example `vrt-gw0p7zigake75znix****`
     */
    "VRouterId": string;
    /**
     * 路由器的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `VRouter-1`
     */
    "VRouterName"?: string;
    /**
     * 路由器的描述信息。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `My VRouter`
     */
    "Description"?: string;
}
