interface RevokeInstanceFromCbnRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId": string;
    /**
    * 云连接网的实例ID。
    * @example `ccn-n2935s1mnwv8i*****`
    */ "CcnInstanceId": string;
    /**
    * 云企业网的实例ID。
    * @example `cen-7qthudw0ll6jm*****`
    */ "CenInstanceId": string;
    "OwnerId"?: number;
}
export { RevokeInstanceFromCbnRequest };