import { SearchRetcodeAppByPageRequest } from "./SearchRetcodeAppByPage/req";
import { SearchRetcodeAppByPageResponse } from "./SearchRetcodeAppByPage/res";
import { CreateAlertContactRequest } from "./CreateAlertContact/req";
import { CreateAlertContactResponse } from "./CreateAlertContact/res";
import { CreateAlertContactGroupRequest } from "./CreateAlertContactGroup/req";
import { CreateAlertContactGroupResponse } from "./CreateAlertContactGroup/res";
import { SearchAlertContactGroupRequest } from "./SearchAlertContactGroup/req";
import { SearchAlertContactGroupResponse } from "./SearchAlertContactGroup/res";
import { ImportAppAlertRulesRequest } from "./ImportAppAlertRules/req";
import { ImportAppAlertRulesResponse } from "./ImportAppAlertRules/res";
import { ListTraceAppsRequest } from "./ListTraceApps/req";
import { ListTraceAppsResponse } from "./ListTraceApps/res";
import { SearchTraceAppByPageRequest } from "./SearchTraceAppByPage/req";
import { SearchTraceAppByPageResponse } from "./SearchTraceAppByPage/res";
import { ListRetcodeAppsRequest } from "./ListRetcodeApps/req";
import { ListRetcodeAppsResponse } from "./ListRetcodeApps/res";
import { SearchTraceAppByNameRequest } from "./SearchTraceAppByName/req";
import { SearchTraceAppByNameResponse } from "./SearchTraceAppByName/res";
import { CreateRetcodeAppRequest } from "./CreateRetcodeApp/req";
import { CreateRetcodeAppResponse } from "./CreateRetcodeApp/res";
import { DeleteRetcodeAppRequest } from "./DeleteRetcodeApp/req";
import { DeleteRetcodeAppResponse } from "./DeleteRetcodeApp/res";
import { QueryDatasetRequest } from "./QueryDataset/req";
import { QueryDatasetResponse } from "./QueryDataset/res";
import { QueryMetricRequest } from "./QueryMetric/req";
import { QueryMetricResponse } from "./QueryMetric/res";
import { SearchAlertContactRequest } from "./SearchAlertContact/req";
import { SearchAlertContactResponse } from "./SearchAlertContact/res";

interface ARMS {
    /**
    * 调用 SearchRetcodeAppByPage 分页查询前端监控任务。
    */ SearchRetcodeAppByPage(query: SearchRetcodeAppByPageRequest): Promise<SearchRetcodeAppByPageResponse>;
    /**
    * 使用 CreateAlertContact 创建报警联系人。
    */ CreateAlertContact(query: CreateAlertContactRequest): Promise<CreateAlertContactResponse>;
    /**
    * 调用 CreateAlertContactGroup 创建联系人分组。
    */ CreateAlertContactGroup(query: CreateAlertContactGroupRequest): Promise<CreateAlertContactGroupResponse>;
    /**
    * 调用 SearchAlertContactGroup 查询报警联系人分组。
    */ SearchAlertContactGroup(query: SearchAlertContactGroupRequest): Promise<SearchAlertContactGroupResponse>;
    /**
    * 调用 ImportAppAlertRules 导入应用报警规则。
    */ ImportAppAlertRules(query: ImportAppAlertRulesRequest): Promise<ImportAppAlertRulesResponse>;
    /**
    * 调用 ListTraceApps 列出指定地域下的全部应用监控任务。
    */ ListTraceApps(query: ListTraceAppsRequest): Promise<ListTraceAppsResponse>;
    /**
    * 调用 SearchTraceAppByPage 分页查询应用监控任务。
    */ SearchTraceAppByPage(query: SearchTraceAppByPageRequest): Promise<SearchTraceAppByPageResponse>;
    /**
    * 调用 ListRetcodeApps 列出指定地域下全部前端监控任务。
    */ ListRetcodeApps(query: ListRetcodeAppsRequest): Promise<ListRetcodeAppsResponse>;
    /**
    * 调用 SearchTraceAppByName 查询应用监控任务列表。
    */ SearchTraceAppByName(query: SearchTraceAppByNameRequest): Promise<SearchTraceAppByNameResponse>;
    CreateRetcodeApp(query: CreateRetcodeAppRequest): Promise<CreateRetcodeAppResponse>;
    DeleteRetcodeApp(query: DeleteRetcodeAppRequest): Promise<DeleteRetcodeAppResponse>;
    QueryDataset(query: QueryDatasetRequest): Promise<QueryDatasetResponse>;
    QueryMetric(query: QueryMetricRequest): Promise<QueryMetricResponse>;
    SearchAlertContact(query: SearchAlertContactRequest): Promise<SearchAlertContactResponse>;
}
export default ARMS;
