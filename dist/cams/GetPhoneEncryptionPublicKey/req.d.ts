export interface GetPhoneEncryptionPublicKeyRequest {
    /**
     * 号码，输入国家/地区码+号码。
     * @example `861526377****`
     */
    "PhoneNumber": string;
    /**
     * ISV子客户的SpaceId。
     * @example `393838848`
     */
    "CustSpaceId"?: string;
}
