import { Component, Input } from '@angular/core';
import { NodeInfo, NodeMetric } from '../interfaces/interfaces';

@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css']
})
export class NodesRowComponent {

  @Input() node: NodeInfo = {} as NodeInfo;

  isDanger(metric: NodeMetric) {
    return metric.used / metric.available > 0.7;
  }
}
