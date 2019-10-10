interface CreateFolderRequest {
    /**
    * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
    * @example `cn-hangzhou-pre`
    */ "RegionId"?: string;
    /**
    * @example `projecct1`
    */ "projectName": string;
    /**
    * @example `/新手任务`
    */ "path"?: string;
}
export { CreateFolderRequest };