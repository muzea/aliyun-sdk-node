interface ReleaseClusterRequest {
    /**
    * 区域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-D7958B72E59BAB88`
    */ "Id": string;
    /**
    * 正常释放时，如果您打开了日志保存，系统会花费几分钟时间将作业的日志都保存到您的OSS空间中。
    * 您也可以勾选强制释放选项，放弃日志的保存，立即释放。
    * @example `true`
    */ "ForceRelease"?: boolean;
}
export { ReleaseClusterRequest };