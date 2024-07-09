export interface ModifyDedicatedHostAccountRequest {
    /**
     * 需要修改主机账号的主机ID。可调用[DescribeDedicatedHosts](~~200944~~)获取目标主机ID。
     * @example `ch-bp10a5id3boqi****`
     */
    "DedicatedHostId": string;
    /**
     * 主机账号名称。
     * @example `test`
     */
    "AccountName": string;
    /**
     * 主机账号密码。
     * @example `test*****`
     */
    "AccountPassword": string;
    /**
     * 需要修改主机账号的主机所在地域ID。可调用[DescribeDedicatedHostAttribute](~~213010~~)获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
