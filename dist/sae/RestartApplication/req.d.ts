interface RestartApplicationRequest {
    "RegionId"?: string;
    /**
    * 目标应用ID
    * @example `0099b7be-5f5b-4512-a7fc-56049ef1aa6b`
    */ "AppId": string;
    /**
    * 最小可用实例数。在变更期间保证可用的实例数。
    * @example `1`
    */ "MinReadyInstances"?: number;
}
export { RestartApplicationRequest };