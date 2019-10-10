interface ListAIJobRequest {
    "RegionId"?: string;
    /**
    * 作业ID列表。最多一次查10个，多个ID之间用逗号隔开。
    * @example `1236ca184c0e47098a5b665e2xxxxxx`
    */ "JobIds": string;
    "OwnerId"?: string;
}
export { ListAIJobRequest };