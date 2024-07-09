export interface DescribeDedicatedHostAutoRenewRequest {
    /**
     * 专有宿主机ID。最多可以输入100个包年包月专有宿主机ID，ID之间用半角逗号（,）隔开。
     * @example `dh-bp165p6xk2tlw61e****,dh-bp1f9vxmno****`
     */
    "DedicatedHostIds": string;
    /**
     * 专有宿主机所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
