interface CreateCapabilityRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 实例ID。
    * @example `cityvisual-xxxxx`
    */ "InstanceId": string;
    /**
    * 算法库能力集名称。
    * @example `PERSON`
    */ "CapabilityName": string;
}
export { CreateCapabilityRequest };