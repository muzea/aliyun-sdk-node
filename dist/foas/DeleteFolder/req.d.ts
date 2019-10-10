interface DeleteFolderRequest {
    /**
    * 集团内用户使用： cn-hangzhou-pre 公共云预发； cn-hangzhou-internal 集团内生产； cn-hangzhou-internal-pre 集团内预发；
    * @example `cn-hangzhou-pre`
    */ "RegionId"?: string;
    /**
    * 文件夹路径
    * @example `/path1/path2`
    */ "path": string;
    /**
    * 项目名称
    * @example `project1`
    */ "projectName": string;
}
export { DeleteFolderRequest };