
import { useState } from 'react'
import GridLayout from 'react-grid-layout'

import './App.css'

// Import the CSS for react-grid-layout
import 'react-grid-layout/css/styles.css'


function App() {
  // Define the initial layout configuration
  const [layout, setLayout] = useState([
    { i: 'chart', x: 0, y: 0, w: 6, h: 4, minW: 3, minH: 2 },
    { i: 'stats', x: 6, y: 0, w: 3, h: 2, minW: 2, minH: 1 },
    { i: 'table', x: 0, y: 4, w: 9, h: 3, minW: 4, minH: 2 },
    { i: 'controls', x: 6, y: 2, w: 3, h: 2, minW: 2, minH: 1 },
    { i: 'logs', x: 9, y: 0, w: 3, h: 7, minW: 2, minH: 3 }
  ])

  // Sample data for demonstration
  const [queryCount, setQueryCount] = useState(42)
  const [logs, setLogs] = useState([
    'Query executed successfully',
    'Connected to database',
    'Table scan completed',
    'Index optimization applied'
  ])

  const handleLayoutChange = (newLayout: any) => {
    setLayout(newLayout)
    console.log('Layout changed:', newLayout)
  }

  const executeQuery = () => {
    setQueryCount(prev => prev + 1)
    setLogs(prev => [`Query #${queryCount + 1} executed at ${new Date().toLocaleTimeString()}`, ...prev.slice(0, 9)])
  }

  return (
    <div style={{ padding: '50px', backgroundColor: '#f5f5f5', minHeight: '100vh', width: '1500px' }}>
      <h1 style={{ marginBottom: '20px', color: '#333' }}>React Grid Layout Demo</h1>
      
      <GridLayout
        className="layout"
        layout={layout}
        onLayoutChange={handleLayoutChange}
        cols={12}
        rowHeight={60}
        width={1200}
        isDraggable={true}
        isResizable={true}
        margin={[35, 35]}
        containerPadding={[0, 0]}
      >
        {/* Chart Panel */}
        <div key="chart" style={{ 
          backgroundColor: 'white', 
          border: '1px solid #e0e0e0', 
          borderRadius: '8px',
          padding: '15px'
        }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#555' }}>📊 Query Performance Chart</h3>
          <div style={{ 
            height: 'calc(100% - 40px)', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed #dee2e6'
          }}>
            <div style={{ textAlign: 'center', color: '#6c757d' }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>📈</div>
              <div>Chart visualization would go here</div>
              <div style={{ fontSize: '12px', marginTop: '5px' }}>
                Drag and resize this panel
              </div>
            </div>
          </div>
        </div>

        {/* Stats Panel */}
        <div key="stats" style={{ 
          backgroundColor: 'white', 
          border: '1px solid #e0e0e0', 
          borderRadius: '8px',
          padding: '15px'
        }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#555' }}>📈 Statistics</h3>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
            {queryCount}
          </div>
          <div style={{ fontSize: '14px', color: '#666' }}>
            Queries Executed
          </div>
          <div style={{ marginTop: '10px', fontSize: '12px', color: '#28a745' }}>
            ✅ System Healthy
          </div>
        </div>

        {/* Data Table Panel */}
        <div key="table" style={{ 
          backgroundColor: 'white', 
          border: '1px solid #e0e0e0', 
          borderRadius: '8px',
          padding: '15px'
        }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#555' }}>🗃️ Query Results</h3>
          <div style={{ 
            height: 'calc(100% - 40px)', 
            overflow: 'auto',
            border: '1px solid #eee',
            borderRadius: '4px'
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#f8f9fa' }}>
                <tr>
                  <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>ID</th>
                  <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Name</th>
                  <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Status</th>
                  <th style={{ padding: '8px', textAlign: 'left', borderBottom: '1px solid #dee2e6' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map(id => (
                  <tr key={id}>
                    <td style={{ padding: '8px', borderBottom: '1px solid #f1f3f4' }}>{id}</td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #f1f3f4' }}>Record {id}</td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #f1f3f4' }}>
                      <span style={{ 
                        padding: '2px 6px', 
                        borderRadius: '12px', 
                        backgroundColor: '#d4edda', 
                        color: '#155724',
                        fontSize: '12px'
                      }}>
                        Active
                      </span>
                    </td>
                    <td style={{ padding: '8px', borderBottom: '1px solid #f1f3f4' }}>2024-01-{10 + id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Controls Panel */}
        <div key="controls" style={{ 
          backgroundColor: 'white', 
          border: '1px solid #e0e0e0', 
          borderRadius: '8px',
          padding: '15px'
        }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#555' }}>⚙️ Controls</h3>
          <button 
            onClick={executeQuery}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginBottom: '10px',
              fontSize: '14px'
            }}
          >
            Execute Query
          </button>
          <button 
            style={{
              width: '100%',
              padding: '8px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            Reset Layout
          </button>
        </div>

        {/* Logs Panel */}
        <div key="logs" style={{ 
          backgroundColor: 'white', 
          border: '1px solid #e0e0e0', 
          borderRadius: '8px',
          padding: '15px'
        }}>
          <h3 style={{ margin: '0 0 15px 0', color: '#555' }}>📋 Activity Logs</h3>
          <div style={{ 
            height: 'calc(100% - 40px)', 
            overflow: 'auto',
            fontSize: '12px'
          }}>
            {logs.map((log, index) => (
              <div 
                key={index} 
                style={{ 
                  padding: '6px 0', 
                  borderBottom: index < logs.length - 1 ? '1px solid #f1f3f4' : 'none',
                  color: '#495057'
                }}
              >
                • {log}
              </div>
            ))}
          </div>
        </div>
      </GridLayout>

<p className="p5"></p>
      <div style={{ 
        marginTop: '50px', 
        backgroundColor: 'white', 
        borderRadius: '8px',
        border: '1px solid #ddd'
      }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#555' }}>🎯 How to Use React Grid Layout:</h3>
        <div style={{ width: '35%', textAlign: 'left', margin: '0 auto' }}>
        <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
          <li><strong>Drag:</strong> Click and drag any panel by its header to move it around</li>
          <li><strong>Resize:</strong> Drag the bottom-right corner of any panel to resize it</li>
          <li><strong>Responsive:</strong> The grid automatically adjusts to different screen sizes</li>
          <li><strong>Constraints:</strong> Each panel has minimum width/height constraints</li>
          <li><strong>Layout State:</strong> Layout changes are tracked and can be saved/restored</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default App
