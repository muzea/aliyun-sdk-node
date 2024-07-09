export interface AddPhoneNumbersRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 绑定的IVR联系流ID，仅当号码用途包含呼入时，该参数才有效，非必填，默认为空。
     * @example `dDMD_0mif4hv`
     */
    "ContactFlowId"?: string;
    /**
     * 号码的用途，注意，如果传入的号码为400号码，则用途只能填Inbound。
     * @example `Bidirection`
     */
    "Usage": string;
    /**
     * 待添加的号码列表。
     * @example `["0101234****", "0105678****"]`
     */
    "NumberList"?: string;
    /**
     * 号码组ID，在云呼叫中心控制台可以看到号码分组信息，非必填，默认为空。
     * @example `2cb77c29-5f60-4b90-b21e-9d2ba9833f14`
     */
    "NumberGroupId"?: string;
}
