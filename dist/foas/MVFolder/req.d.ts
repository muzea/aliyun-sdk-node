interface MVFolderRequest {
    /**
    * @example `region`
    */ "RegionId"?: string;
    /**
    * 项目名称
    * @example `p`
    */ "projectName": string;
    /**
    * 原路径
    * @example `/dets`
    */ "srcPath"?: string;
    /**
    * 目标路径
    * @example `/folder1`
    */ "destPath"?: string;
}
export { MVFolderRequest };