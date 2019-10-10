interface DeleteVSwitchRequest {
    /**
    * 要删除的交换机的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 要删除的交换机的ID。
    * @example `vsw-asdfjlna****`
    */ "VSwitchId": string;
}
export { DeleteVSwitchRequest };