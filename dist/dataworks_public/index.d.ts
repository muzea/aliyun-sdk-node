import { CreateManualDagRequest } from "./CreateManualDag/req";
import { CreateManualDagResponse } from "./CreateManualDag/res";
import { SearchManualDagNodeInstanceRequest } from "./SearchManualDagNodeInstance/req";
import { SearchManualDagNodeInstanceResponse } from "./SearchManualDagNodeInstance/res";

interface DATAWORKS_PUBLIC {
    /**
    * 触发手动业务流程执行
    */ CreateManualDag(query: CreateManualDagRequest): Promise<CreateManualDagResponse>;
    /**
    * SearchManualDagNodeInstance用于查询已触发的手动业务流程示例状态和名称等信息，包括运行中和运行完成的实例。
    */ SearchManualDagNodeInstance(query: SearchManualDagNodeInstanceRequest): Promise<SearchManualDagNodeInstanceResponse>;
}
export default DATAWORKS_PUBLIC;
