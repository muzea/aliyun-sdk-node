export interface ModifyPhoneNumberRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 号码。
     * @example `0102134****`
     */
    "Number": string;
    /**
     * 号码用途。
     * @example `Bidirection`
     */
    "Usage": string;
    /**
     * 号码绑定的IVR联系流ID，仅在号码用途为Inbound或Bidirection时，该字段才有效。
     * @example `78128960-bb00-4ddc-8a82-923a8c5bd22d`
     */
    "ContactFlowId"?: string;
}
