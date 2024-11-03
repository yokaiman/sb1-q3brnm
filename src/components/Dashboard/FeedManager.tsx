import React, { useState } from 'react';
import { Plus, Trash2, RefreshCw, Rss } from 'lucide-react';

interface Feed {
  id: number;
  name: string;
  url: string;
  lastFetch: string | null;
}

export default function FeedManager() {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [newFeedUrl, setNewFeedUrl] = useState('');

  const handleAddFeed = async () => {
    if (!newFeedUrl.trim()) return;
    
    // TODO: Implement feed addition logic
    setNewFeedUrl('');
  };

  const handleRefreshFeed = async (id: number) => {
    // TODO: Implement feed refresh logic
  };

  const handleDeleteFeed = async (id: number) => {
    // TODO: Implement feed deletion logic
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">RSS Feeds</h2>
        <div className="flex space-x-2">
          <input
            type="url"
            value={newFeedUrl}
            onChange={(e) => setNewFeedUrl(e.target.value)}
            placeholder="Enter RSS feed URL"
            className="flex-1 bg-gray-800 text-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            onClick={handleAddFeed}
            className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Feed</span>
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {feeds.map((feed) => (
          <div
            key={feed.id}
            className="flex items-center justify-between bg-gray-800 p-4 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <Rss className="w-5 h-5 text-purple-400" />
              <div>
                <h3 className="font-medium text-gray-100">{feed.name}</h3>
                <p className="text-sm text-gray-400">{feed.url}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleRefreshFeed(feed.id)}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleDeleteFeed(feed.id)}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-red-400"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}