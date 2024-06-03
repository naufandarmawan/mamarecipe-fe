import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipe: [],
  params: {
    limit: 9,
    page: 1,
    search: '',
    sort: 'created_at',
    sortBy: 'desc',
  },
  searchInput: '',
  selectedSort: '',
  selectedSortBy: '',
  error: '',
  loading: false,
  
  setRecipe: (recipe) => set({ recipe }),
  setParams: (params) => set((state) => ({ params: { ...state.params, ...params } })),
  setSearchInput: (searchInput) => set({ searchInput }),
  setSelectedSort: (selectedSort) => set({ selectedSort }),
  setSelectedSortBy: (selectedSortBy) => set({ selectedSortBy }),
  setError: (error) => set({ error }),
  setLoading: (loading) => set({ loading }),
  getRecipe: async () => {
    set({ loading: true });
    const state = useRecipeStore.getState();
    try {
      const queryParams = new URLSearchParams({
        limit: state.params.limit,
        page: state.params.page,
        ...(state.params.search ? { search: state.params.search } : {}),
        ...(state.params.sort ? { sort: state.params.sort } : {}),
        sortBy: state.params.sortBy,
      });

      const url = `${process.env.NEXT_PUBLIC_API}/v1/recipes?${queryParams.toString()}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        set({ error: 'Get recipes failed', loading: false });
        toast.error('Get recipes failed');
        return;
      }

      const res = await response.json();
      set({ recipe: res.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
      toast.error(err.message);
    }
  },
}));

export default useRecipeStore;