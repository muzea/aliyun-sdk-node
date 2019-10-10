interface DeleteCasterVideoResourceRequest {
    /**
    * 地域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 资源ID。
    * @example `05ab713c-676e-49c0-96ce-cc408da1b314`
    */ "ResourceId": string;
    "OwnerId"?: number;
    /**
    * 导播台ID。
    * @example `80787064-1c94-4dc1-85ce-9409960a9bf0`
    */ "CasterId": string;
}
export { DeleteCasterVideoResourceRequest };