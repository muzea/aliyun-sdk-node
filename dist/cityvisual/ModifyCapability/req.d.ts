interface ModifyCapabilityRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 算法库能力集ID。
    * @example `261`
    */ "CapabilityId": string;
    /**
    * 算法库能力集名称。
    * @example `PERSON`
    */ "CapabilityName": string;
    "InstanceId"?: string;
}
export { ModifyCapabilityRequest };