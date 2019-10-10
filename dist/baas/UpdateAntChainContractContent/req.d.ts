interface UpdateAntChainContractContentRequest {
    /**
    * 地域ID
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 上级目录ID
    * @example `R38DYDop`
    */ "ParentContentId"?: string;
    /**
    * 文件ID
    * @example `R6XMn59e`
    */ "ContentId": string;
    /**
    * 更新文件/文件夹名称
    * @example `newFile`
    */ "ContentName"?: string;
    /**
    * 文件内容
    * @example `update content`
    */ "Content"?: string;
}
export { UpdateAntChainContractContentRequest };