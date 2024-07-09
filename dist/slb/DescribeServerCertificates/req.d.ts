export interface DescribeServerCertificatesRequest {
    /**
     * 传统型负载均衡实例的地域。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * > 当您所选地域的Enpoint（服务地址）为slb.aliyuncs.com时，`RegionId`必填。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 服务器证书ID。
     * @example `12315790*******_166f8204689_1714763408_709981430`
     */
    "ServerCertificateId"?: string;
    /**
     * 资源组ID。
     * @example `rg-atstuj3rtop****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。N的取值范围：**1~20**。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `test`
         */
        Key: string;
        /**
         * 资源的标签值。N的取值范围：**1~20**。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `1`
         */
        Value: string;
    }[];
}
